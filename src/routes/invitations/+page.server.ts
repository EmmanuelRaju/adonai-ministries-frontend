import { submitInvitation } from '$lib/utils/actions';
import { fail, type Actions } from '@sveltejs/kit';
import { PUBLIC_MODE } from '$env/static/public';
import { validateTurnstileToken } from '$lib/utils/validateTurnstileToken';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export const actions: Actions = {
	submitInvitation: async ({ request }) => {
		const formData = await request.formData();
		const token = formData.get('cf-turnstile-response')?.toString() || '';
		const file = formData.get('formal_letter') as File;

		if (file && file.size > MAX_FILE_SIZE) {
			return fail(400, {
				error: true,
				message: 'File size must be less than 5MB.'
			});
		}

		if (PUBLIC_MODE !== 'DEV') {
			if (!token || !(await validateTurnstileToken(token))) {
				return fail(400, {
					error: true,
					message: 'Security check failed. Please try again.'
				});
			}
		}

		const result = await submitInvitation(formData);

		if (result.type === 'error') {
			return fail(result.status, {
				error: true,
				message: result.data.message
			});
		}

		return result;
	}
};
