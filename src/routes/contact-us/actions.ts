export const contactUs = async (formData: FormData) => {
	try {
		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 2000));

		const data = Object.fromEntries(formData);
		console.log('Form data:', data);

		return {
			type: 'success',
			status: 200,
			data: { message: 'Message sent successfully!' }
		};
	} catch (error) {
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
