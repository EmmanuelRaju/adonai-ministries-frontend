import { Resend } from 'resend';
import { RESEND_API_KEY, TO_EMAIL } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

type EmailConfig = {
	formTitle: string;
	fromEmail: string;
	fromName: string;
	subjectPrefix: string;
};

type ActionResult = {
	type: string;
	status: number;
	data: {
		message: string;
		error?: Error;
	};
};

const createEmailContent = (data: Record<string, FormDataEntryValue>, title: string): string => `
    <h2>${title}</h2>
    <table style="width: 100%; border-collapse: collapse;">
        ${Object.entries(data)
					.filter(([key]) => key !== 'cf-turnstile-response')
					.map(
						([key, value]) => `
                <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 8px; font-weight: bold;">${key.replace(/_/g, ' ').toUpperCase()}</td>
                    <td style="padding: 8px;">${value}</td>
                </tr>
            `
					)
					.join('')}
    </table>
`;

const handleEmailSubmission = async (
	formData: FormData,
	config: EmailConfig
): Promise<ActionResult> => {
	try {
		const data = Object.fromEntries(formData);
		const emailContent = createEmailContent(data, config.formTitle);

		const response = await resend.emails.send({
			from: `${config.fromName} <${config.fromEmail}>`,
			to: [TO_EMAIL],
			subject: `${config.subjectPrefix}: ${data.name || 'Anonymous'}`,
			html: emailContent,
			replyTo: data.email?.toString()
		});

		if (response.error == null) {
			return {
				type: 'success',
				status: 200,
				data: { message: `${config.formTitle} submitted successfully!` }
			};
		} else {
			console.error(`Error sending ${config.formTitle.toLowerCase()}:`, response.error);
			return {
				type: 'error',
				status: 500,
				data: { message: response.error.message }
			};
		}
	} catch (error) {
		console.error(`Error sending ${config.formTitle.toLowerCase()}:`, error);
		return {
			type: 'error',
			status: 500,
			data: {
				message: `Failed to submit ${config.formTitle.toLowerCase()}. Please try again.`,
				error: error instanceof Error ? error : new Error('Unknown error')
			}
		};
	}
};

// Action exports using the reusable function
export const contactUs = (formData: FormData) =>
	handleEmailSubmission(formData, {
		formTitle: 'Contact Form',
		fromEmail: 'contact@selvamanuel.com',
		fromName: 'AMI Contact Form',
		subjectPrefix: 'New Contact Form Submission'
	});

export const submitPrayerRequest = (formData: FormData) =>
	handleEmailSubmission(formData, {
		formTitle: 'Prayer Request',
		fromEmail: 'prayer@selvamanuel.com',
		fromName: 'AMI Prayer Request',
		subjectPrefix: 'New Prayer Request'
	});

export const submitPraiseReport = (formData: FormData) =>
	handleEmailSubmission(formData, {
		formTitle: 'Praise Report',
		fromEmail: 'praise@selvamanuel.com',
		fromName: 'AMI Praise Report',
		subjectPrefix: 'New Praise Report'
	});
