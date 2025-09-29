import { contactUs } from '$lib/utils/actions';
import { fail, type Actions } from '@sveltejs/kit';
import { PUBLIC_MODE } from '$env/static/public';
import { validateTurnstileToken } from '$lib/utils/validateTurnstileToken';

export const prerender = false;

export const actions: Actions = {
	contactUs: async ({ request }) => {
		const formData = await request.formData();
		const token = formData.get('cf-turnstile-response')?.toString() || '';

		if (PUBLIC_MODE !== 'DEV') {
			if (!token || !(await validateTurnstileToken(token))) {
				return fail(400, {
					error: true,
					message: 'Security check failed. Please try again.'
				});
			}
		}

		const result = await contactUs(formData);

		// console.log('result', result);

		if (result.type === 'error') {
			return fail(result.status, {
				error: true,
				message: result.data.message
			});
		}

		return result;
	}
};
