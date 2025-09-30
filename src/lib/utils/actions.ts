import { Resend } from 'resend';
import { RESEND_API_KEY, TO_EMAIL } from '$env/static/private';
import { PUBLIC_FROM_EMAIL_DOMAIN } from '$env/static/public';

const resend = new Resend(RESEND_API_KEY);

type EmailConfig = {
	formTitle: string;
	fromEmail: string;
	fromName: string;
	subjectPrefix: string;
	includeAttachments?: boolean;
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

		const attachments = [];

		if (config.includeAttachments) {
			const file = formData.get('formal_letter');
			if (file && file instanceof File && file.size > 0) {
				const arrayBuffer = await file.arrayBuffer();
				const uint8Array = new Uint8Array(arrayBuffer);

				let binary = '';
				for (let i = 0; i < uint8Array.length; i++) {
					binary += String.fromCharCode(uint8Array[i]);
				}
				const base64 = btoa(binary);

				attachments.push({
					content: base64,
					filename: file.name,
					type: file.type,
					disposition: 'attachment'
				});
			}
		}

		const emailContent = createEmailContent(data, config.formTitle);

		const response = await resend.emails.send({
			from: `${config.fromName} <${config.fromEmail}>`,
			to: [TO_EMAIL],
			subject: `${config.subjectPrefix}: ${data.name || data['church/organization_name'] || 'Anonymous'}`,
			html: emailContent,
			replyTo: data.email?.toString(),
			attachments: attachments.length > 0 ? attachments : undefined
		});

		// console.log('response', response);

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
		fromEmail: `contact@${PUBLIC_FROM_EMAIL_DOMAIN}`,
		fromName: 'AMI Contact Form',
		subjectPrefix: 'New Contact Form Submission'
	});

export const submitPrayerRequest = (formData: FormData) =>
	handleEmailSubmission(formData, {
		formTitle: 'Prayer Request',
		fromEmail: `prayer@${PUBLIC_FROM_EMAIL_DOMAIN}`,
		fromName: 'AMI Prayer Request',
		subjectPrefix: 'New Prayer Request'
	});

export const submitPraiseReport = (formData: FormData) =>
	handleEmailSubmission(formData, {
		formTitle: 'Praise Report',
		fromEmail: `praise@${PUBLIC_FROM_EMAIL_DOMAIN}`,
		fromName: 'AMI Praise Report',
		subjectPrefix: 'New Praise Report'
	});

export const submitInvitation = (formData: FormData) =>
	handleEmailSubmission(formData, {
		formTitle: 'Invitation Request',
		fromEmail: `invitations@${PUBLIC_FROM_EMAIL_DOMAIN}`,
		fromName: 'AMI Invitation Request',
		subjectPrefix: 'New Invitation Request',
		includeAttachments: true
	});
