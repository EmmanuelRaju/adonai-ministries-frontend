<script lang="ts">
	import { enhance } from '$app/forms';
	import { PUBLIC_MODE, PUBLIC_TURNSTILE_SITE_KEY } from '$env/static/public';
	import { Hero, Toast } from '$lib/components';
	import { engagementFormFields, invitationFormFields } from './data';
	import { Turnstile } from 'svelte-turnstile';

	let isSubmitting = $state(false);
	let showCaptcha = $state(true);
	let submissionMessage: string | null = $state(null);
	let submissionStatus: string | null = $state(null);
	let { form } = $props();

	$effect(() => {
		if (form) {
			showCaptcha = false;
			setTimeout(() => (showCaptcha = true), 0);
			form = null;
		}
	});

	const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

	const handleEnhance = async ({
		formElement,
		cancel
	}: {
		formElement: HTMLFormElement;
		cancel: () => void;
	}) => {
		submissionMessage = '';

		const fileInput = formElement.querySelector('input[type="file"]') as HTMLInputElement;
		const file = fileInput?.files?.[0];

		if (file && file.size > MAX_FILE_SIZE) {
			submissionStatus = 'error';
			submissionMessage = 'File size must be less than 5MB.';
			cancel();
			return;
		}

		const requiredFields = formElement.querySelectorAll('[required]');
		const isValid = Array.from(requiredFields).every((field) =>
			(field as HTMLInputElement).value.trim()
		);

		if (!isValid) {
			submissionStatus = 'error';
			submissionMessage = 'Please fill in all required fields.';
			cancel();
			return;
		}

		isSubmitting = true;

		return async ({ result }: { result: { type: string; data?: { message?: string } } }) => {
			if (result.type === 'failure') {
				submissionStatus = 'error';
				submissionMessage = result.data?.message || 'An error occurred. Please try again.';
			} else if (result.type === 'success') {
				submissionStatus = 'success';
				submissionMessage = 'Invitation request sent successfully!';
				formElement.reset();
			}
			isSubmitting = false;
		};
	};
</script>

<Hero title="Invitations" />

<section class="container-width mx-auto p-4 pt-8 md:text-justify">
	<p class="drop-cap">
		Thank you for your interest in the ministry of Bro.Selva Manuel. Please include the following
		information and your request will be prayerfully considered and responded promptly.
	</p>
	<form
		method="POST"
		action="?/submitInvitation"
		class="mx-auto flex flex-col gap-3"
		id="invitation"
		enctype="multipart/form-data"
		use:enhance={handleEnhance}
	>
		<fieldset class="fieldset">
			<legend class="fieldset-legend">Upload Formal Letter (Word/PDF)</legend>
			<input
				type="file"
				class="file-input"
				name="formal_letter"
				accept=".doc,.docx,.pdf"
				required
				disabled={isSubmitting}
			/>
			<small class="text-gray-500">Maximum file size: 5MB</small>
		</fieldset>

		<div class="flex flex-col justify-between md:flex-row md:gap-10">
			<div>
				<h2 class="text-left">Requesting ministry details</h2>
				{#each invitationFormFields as field, i (i)}
					<field.component
						type={field.type}
						label={field.label}
						class="validator input input-md"
						placeholder={field.placeholder}
						validatorHint={field.validatorHint}
						options={field.options ?? []}
						name={field.label.toLowerCase().replace(/\s+/g, '_')}
						disabled={isSubmitting}
						{...field.props}
					></field.component>
				{/each}
			</div>
			<div>
				<h2 class="text-left">Engagement details</h2>
				{#each engagementFormFields as field, i (i)}
					<field.component
						type={field.type}
						label={field.label}
						class="validator input input-md"
						placeholder={field.placeholder}
						validatorHint={field.validatorHint}
						options={field.options ?? []}
						name={field.label.toLowerCase().replace(/\s+/g, '_')}
						disabled={isSubmitting}
						{...field.props}
					></field.component>
				{/each}
			</div>
		</div>
		<button class="btn mt-2" type="submit" disabled={isSubmitting}>
			{#if isSubmitting}
				<span class="loading loading-sm loading-spinner"></span>
				Sending...
			{:else}
				Submit request
			{/if}
		</button>
		{#if showCaptcha && PUBLIC_MODE !== 'DEV'}
			<Turnstile siteKey={PUBLIC_TURNSTILE_SITE_KEY} class="mt-2" />
		{/if}
		<Toast bind:kind={submissionStatus} bind:message={submissionMessage} classes="mt-2"></Toast>
	</form>
</section>
