<script lang="ts">
	import { enhance } from '$app/forms';
	import { PUBLIC_MODE, PUBLIC_TURNSTILE_SITE_KEY } from '$env/static/public';
	import { Hero, Toast } from '$lib/components';
	import { prayerRequestFormFields } from './data';
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
				submissionMessage = 'Prayer request submitted successfully!';
				formElement.reset();
			}
			isSubmitting = false;
		};
	};
</script>

<Hero title="Prayer requests" />

<section class="container-width mx-auto p-4 pt-8 md:text-justify">
	<p class="drop-cap">
		Our God is the prayer answering God. If you have a prayer request, We would love to pray with
		you. The Bible declares in Jer 33:3 ” Call unto me; I will answer you”. ” Cast your cares on the
		LORD and He will sustain you; He will never let the righteous fall.” (Psa 55:22). ”Abraham never
		wavered in believing God’s promise. In fact, his faith grew stronger, and in this he brought
		glory to God. He was absolutely convinced that God was able to do anything he promised. (Rom
		4:20,21). The Bible declares in II Cor 1: 20, “All the promises of God in Him are Yes, and in
		Him Amen, to the glory of God through us.”
	</p>
	<p>
		“I tell you the truth, whatever you bind on earth will be bound in heaven, and whatever you
		loose on earth will be loosed in heaven. Again, I tell you that if two of you on earth agree
		about anything you ask for, it will be done for you by my Father in heaven.” ( Matt 18:18,19). “
		The prayer of faith will save the sick, and the Lord will raise him up. And if he has committed
		sins, he will be forgiven… pray for one another, that you may be healed. The effective, fervent
		prayer of a righteous man avails much. (James 5:15,16). Dear Saint of God, We will fervently
		pray for your need joining with you and we will together witness the glory of God manifested in
		your life.
	</p>
	<p>
		When our God answers the prayer, would you please take a moment to send us your praise report
		and we will join with you in praising our Lord God Almighty. Your testimony will also encourage
		others to believe for their miracle. The Bible declares in Luke 17: 17-19, When we come to our
		Lord He heals us; When we come back to our Lord with thanksgiving, He makes us whole. Our Lord
		always loves people who are thankful to Him .
	</p>
	<section>
		<h2 class="text-center">Please let us know how we can pray for you. God Bless you.</h2>
		<form
			method="POST"
			action="?/submitPrayerRequest"
			class="mx-auto flex flex-col gap-3 md:w-80"
			use:enhance={handleEnhance}
		>
			{#each prayerRequestFormFields as field}
				<field.component
					type={field.type}
					label={field.label}
					class="validator input input-md"
					placeholder={field.placeholder}
					validatorHint={field.validatorHint}
					name={field.label.toLowerCase().replace(/\s+/g, '_')}
					options={field.options ?? []}
					disabled={isSubmitting}
					{...field.props}
				></field.component>
			{/each}
			<button class="btn mt-2" type="submit" disabled={isSubmitting}>
				{#if isSubmitting}
					<span class="loading loading-sm loading-spinner"></span>
					Submitting...
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
</section>
