import { contactUs } from './actions';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	contactUs: async ({ request }) => {
		const formData = await request.formData();
		return contactUs(formData);
	}
};
