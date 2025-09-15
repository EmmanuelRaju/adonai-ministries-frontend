<script lang="ts">
	import { fonts, themes } from '$lib/data/themes';
	import { Palette } from '@lucide/svelte';

	let modal: HTMLDivElement | null = $state(null);
	const modalId = 'theme-setter';

	const closeModal = (e: MouseEvent | KeyboardEvent) => {
		if (e.target === modal) {
			history.back();
		}
	};

	let selectedTheme = $state('light');
	let selectedHeadingFont = $state(`'Playfair Display', serif`);
	let selectedBodyFont = $state(`'Inter', san-serif`);

	$effect(() => {
		document.documentElement.setAttribute('data-theme', selectedTheme);
	});
	$effect(() => {
		document.documentElement.style.setProperty('--font-heading', selectedHeadingFont);
	});
	$effect(() => {
		document.documentElement.style.setProperty('--font-body', selectedBodyFont);
	});
</script>

<a href="#{modalId}" class="btn fixed right-5 bottom-5 btn-circle btn-primary">
	<Palette></Palette>
</a>

<div
	bind:this={modal}
	tabindex={0}
	class="modal modal-bottom sm:modal-middle"
	role="dialog"
	id={modalId}
	onclick={closeModal}
	onkeydown={closeModal}
>
	<div class="modal-box">
		<button
			class="btn absolute top-2 right-2 btn-circle btn-ghost btn-sm"
			onclick={() => history.back()}>✕</button
		>
		<fieldset class="fieldset">
			<legend class="fieldset-legend">Theme</legend>
			<select class="select w-full" bind:value={selectedTheme}>
				<option disabled selected>Pick a theme</option>
				{#each themes as theme}
					<option class="captialise" value={theme}>{theme}</option>
				{/each}
			</select>
		</fieldset>
		<fieldset class="fieldset">
			<legend class="fieldset-legend">Heading font</legend>
			<select class="select w-full" bind:value={selectedHeadingFont}>
				<option disabled selected>Pick a font</option>
				{#each fonts as font}
					<option class="captialise" value={font}>{font}</option>
				{/each}
			</select>
		</fieldset>
		<fieldset class="fieldset">
			<legend class="fieldset-legend">Body font</legend>
			<select class="select w-full" bind:value={selectedBodyFont}>
				<option disabled selected>Pick a font</option>
				{#each fonts as font}
					<option class="captialise" value={font}>{font}</option>
				{/each}
			</select>
		</fieldset>
		<div class="modal-action justify-center">
			<button onclick={() => history.back()} class="btn w-full btn-primary">Done</button>
		</div>
	</div>
</div>
