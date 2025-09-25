import { contactUs } from './actions';
import { fail, type Actions } from '@sveltejs/kit';
import { TURNSTILE_SECRET_KEY } from '$env/static/private';
import { PUBLIC_MODE } from '$env/static/public';

async function validateToken(token: string): Promise<boolean> {
	const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: new URLSearchParams({
			secret: TURNSTILE_SECRET_KEY,
			response: token
		})
	});
	const data = await response.json();

	// Add more detailed validation
	if (!data.success) {
		console.error('Turnstile validation failed:', data['error-codes']);
		return false;
	}

	return true;
}

export const actions: Actions = {
	contactUs: async ({ request }) => {
		const formData = await request.formData();
		const token = formData.get('cf-turnstile-response')?.toString() || '';

		if (PUBLIC_MODE !== 'DEV') {
			if (!token || !(await validateToken(token))) {
				return fail(400, {
					error: true,
					message: 'Security check failed. Please try again.'
				});
			}
		}

		const result = await contactUs(formData);

		if (result.type === 'error') {
			return fail(result.status, {
				error: true,
				message: result.data.message
			});
		}

		return result;
	}
};
