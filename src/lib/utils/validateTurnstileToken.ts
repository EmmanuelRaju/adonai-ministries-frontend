import { TURNSTILE_SECRET_KEY } from '$env/static/private';

export async function validateTurnstileToken(token: string): Promise<boolean> {
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
