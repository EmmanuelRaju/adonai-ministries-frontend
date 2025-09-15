<script lang="ts">
	let email = '';
	const subscribe = () => {
		// Handle submission (integrate with a service or serverless function)
		console.log('Subscribed:', email);
	};
</script>

<form
	class="mx-auto max-w-md rounded-xl bg-base-100 p-6 shadow"
	on:submit|preventDefault={subscribe}
>
	<h3 class="mb-4 text-center text-xl font-semibold">Subscribe to Our Newsletter</h3>
	<div class="form-control">
		<input
			type="email"
			bind:value={email}
			placeholder="Enter your email"
			class="input-bordered input"
			required
		/>
	</div>
	<button type="submit" class="btn mt-4 w-full btn-primary">Subscribe</button>
</form>
