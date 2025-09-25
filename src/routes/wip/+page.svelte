<script lang="ts">
	import { Resend } from 'resend';

	const resend = new Resend('re_RbSAnt7n_Ep29mYcPjRutFzTiZcnowqV8');

	const sendEmail = async () => {
		await resend.emails.send({
			from: 'AMI Contact Form <contact@selvamanuel.com>',
			to: ['eraj007@gmail.com'],
			subject: `Contact Form Test`,
			html: '<h2>New Contact Form Submission</h2>',
			replyTo: 'eraj007@gmail.com'
		});
	};
</script>

<button onclick={sendEmail} class="btn btn-primary">Test contact form</button>
