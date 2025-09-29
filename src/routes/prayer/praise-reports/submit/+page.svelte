<script lang="ts">
	import { enhance } from '$app/forms';
	import { PUBLIC_MODE, PUBLIC_TURNSTILE_SITE_KEY } from '$env/static/public';
	import { Hero, Toast, SEO } from '$lib/components';
	import { submitPraiseReportFields } from './data';
	import { Turnstile } from 'svelte-turnstile';
	import praise from '$lib/assets/images/praise.jpg?enhanced';

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

	const handleEnhance = async ({
		formElement,
		cancel
	}: {
		formElement: HTMLFormElement;
		cancel: () => void;
	}) => {
		submissionMessage = '';

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
				submissionMessage = 'Praise report submitted successfully!';
				formElement.reset();
			}
			isSubmitting = false;
		};
	};
</script>

<SEO
	title="AMI | Praise reports"
	description="We thank you for taking time to share your praise report with us. We join with you in praising God as our Lord answered the prayer. May our Lord God’s Glorious Face continue to shine upon you and the Blessed Hand of our compassionate Father continue to engulf you.When we come to our God He heals us but when we come back to our Lord with thanksgiving, He makes us whole (Luke 17:17-19). Our Lord always loves people who are thankful to Him ."
	url="/prayer/praise-reports/submit"
></SEO>

<Hero title="Share praise report" img={praise} />

<section class="container-width mx-auto p-4 pt-8 md:text-justify">
	<p class="drop-cap">
		We thank you for taking time to share your praise report with us. We join with you in praising
		God as our Lord answered the prayer. May our Lord God’s Glorious Face continue to shine upon you
		and the Blessed Hand of our compassionate Father continue to engulf you.When we come to our God
		He heals us but when we come back to our Lord with thanksgiving, He makes us whole (Luke
		17:17-19). Our Lord always loves people who are thankful to Him .
	</p>
	<p>
		The Bible declares in Revelation 12: 11, “We overcome by the Blood of the Lamb of God and by the
		Word of our Testimony”. Your Testimony is a seed for more miracles. Thank you for helping us let
		others know what God is doing, for His Glory. God Bless You.
	</p>
	<section>
		<h2 class="text-center">Please fill out the following and let us know what God has done</h2>
		<form
			method="POST"
			action="?/submitPraiseReport"
			class="mx-auto flex flex-col gap-3 md:w-80"
			use:enhance={handleEnhance}
		>
			{#each submitPraiseReportFields as field, i (i)}
				<field.component
					type={field.type || 'text'}
					label={field.label || ''}
					class="validator input input-md"
					placeholder={field.placeholder || ''}
					validatorHint={field.validatorHint || ''}
					name={field.label.toLowerCase().replace(/\s+/g, '_')}
					options={field.options ?? []}
					disabled={isSubmitting}
					{...field.props}
				/>
			{/each}
			<button class="btn mt-2" type="submit" disabled={isSubmitting}>
				{#if isSubmitting}
					<span class="loading loading-sm loading-spinner"></span>
					Submitting...
				{:else}
					Submit praise report
				{/if}
			</button>
			{#if showCaptcha && PUBLIC_MODE !== 'DEV'}
				<Turnstile siteKey={PUBLIC_TURNSTILE_SITE_KEY} class="mt-2" />
			{/if}
			<Toast bind:kind={submissionStatus} bind:message={submissionMessage} classes="mt-2" />
		</form>
	</section>
</section>
