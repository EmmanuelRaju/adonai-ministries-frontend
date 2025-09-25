<script lang="ts">
	import { enhance } from '$app/forms';
	import { PUBLIC_MODE, PUBLIC_TURNSTILE_SITE_KEY } from '$env/static/public';
	import { Hero } from '$lib/components';
	import { contactUsFormFields } from './data';
	import { Turnstile } from 'svelte-turnstile';
	import { fade } from 'svelte/transition';

	let isSubmitting = $state(false);
	let showCaptcha = $state(true);
	let successMessage = $state('');
	let errorMessage = $state('');
	let { form } = $props();

	$effect(() => {
		if (form) {
			// Hide and re-show the CAPTCHA to allow multiple submissions
			showCaptcha = false;
			setTimeout(() => (showCaptcha = true), 0);
			form = null;
		}
	});

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
		// Reset messages
		successMessage = '';
		errorMessage = '';

		const requiredFields = formElement.querySelectorAll('[required]');
		const isValid = Array.from(requiredFields).every((field) =>
			(field as HTMLInputElement).value.trim()
		);

		if (!isValid) {
			errorMessage = 'Please fill in all required fields.';
			cancel();
			return;
		}

		isSubmitting = true;

		return async ({ result }: { result: { type: string; data?: { message?: string } } }) => {
			if (result.type === 'failure') {
				errorMessage = result.data?.message || 'An error occurred. Please try again.';
			} else if (result.type === 'success') {
				successMessage = 'Message sent successfully!';
				formElement.reset();
			}
			isSubmitting = false;
		};
	};
</script>

<Hero title="Contact us" />

{#if errorMessage}
	<div class="container-width mx-auto mt-4 alert alert-error" transition:fade>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6 shrink-0 stroke-current"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
		<span>{errorMessage}</span>
	</div>
{/if}

{#if successMessage}
	<div class="container-width mx-auto mt-4 alert alert-success" transition:fade>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6 shrink-0 stroke-current"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
		<span>{successMessage}</span>
	</div>
{/if}

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
			{#if showCaptcha && PUBLIC_MODE !== 'DEV'}
				<Turnstile siteKey={PUBLIC_TURNSTILE_SITE_KEY} />
			{/if}
		</form>
	</div>
</section>
