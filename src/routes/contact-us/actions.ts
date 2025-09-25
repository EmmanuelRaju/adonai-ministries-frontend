import { Resend } from 'resend';
import { RESEND_API_KEY, TO_EMAIL } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

export const contactUs = async (
	formData: FormData
): Promise<{ type: string; status: number; data: { message: string; error?: Error } }> => {
	try {
		const data = Object.fromEntries(formData);

		// Create email content
		const emailContent = `
            <h2>New Contact Form Submission</h2>
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

		// Send email
		await resend.emails.send({
			from: 'AMI Contact Form <contact@selvamanuel.com>',
			to: [TO_EMAIL],
			subject: `New Contact Form Submission: ${data.name || 'No Name'}`,
			html: emailContent,
			replyTo: data.email?.toString()
		});

		return {
			type: 'success',
			status: 200,
			data: { message: 'Message sent successfully!' }
		};
	} catch (error) {
		console.error('Error sending email:', error);
		return {
			type: 'error',
			status: 500,
			data: {
				message: 'Failed to send message. Please try again.',
				error: error instanceof Error ? error : new Error('Unknown error')
			}
		};
	}
};
