<script lang="ts">
	import { enhance } from '$app/forms';
	import { Hero } from '$lib/components';
	import { contactUsFormFields } from './data';

	let isSubmitting = $state(false);

	const handleEnhance = async ({
		formData,
		formElement,
		action,
		cancel
	}: {
		formData: FormData;
		formElement: HTMLFormElement;
		action: URL;
		cancel: () => void;
	}) => {
		const requiredFields = formElement.querySelectorAll('[required]');
		const isValid = Array.from(requiredFields).every((field) =>
			(field as HTMLInputElement).value.trim()
		);

		if (!isValid) {
			cancel();
			return;
		}

		isSubmitting = true;

		try {
			// Simulate form submission logic here
			console.log('Form submitted:', { formData, action });
		} finally {
			isSubmitting = false;
		}
	};
</script>

<Hero title="Contact us" />

<section class="container-width mx-auto p-4 pt-8 md:text-justify">
	<p class="drop-cap">
		If there are any spiritual questions or would like to know more about AMI, please contact us
		using the information below. We are looking forward to hear from you!
	</p>
	<div class="mt-10 flex flex-col justify-between gap-10 md:flex-row md:gap-20">
		<address class="flex flex-col">
			Adonai’s Ministries International<br />
			P.O.Box 118692<br />
			Carrollton, TX 75011-8692<br />
			<a href="tel:4693277000">(469)327-7000</a>
			<a href="tel:855ADONAIS">(855)-ADONAIS</a>
			<a href="mailto:inforequest@selvamanuel.org">inforequest@selvamanuel.org</a>
		</address>
		<form
			method="POST"
			action="?/contactUs"
			class="flex flex-col md:w-80"
			use:enhance={handleEnhance}
		>
			{#each contactUsFormFields as field}
				<field.component
					type={field.type}
					label={field.label}
					class="validator input input-md"
					placeholder={field.placeholder}
					validatorHint={field.validatorHint}
					name={field.label.toLowerCase().replace(/\s+/g, '_')}
					disabled={isSubmitting}
					{...field.props}
				></field.component>
			{/each}
			<button class="btn mt-2" type="submit" disabled={isSubmitting}>
				{#if isSubmitting}
					<span class="loading loading-sm loading-spinner"></span>
					Sending...
				{:else}
					Contact us
				{/if}
			</button>
		</form>
	</div>
</section>
