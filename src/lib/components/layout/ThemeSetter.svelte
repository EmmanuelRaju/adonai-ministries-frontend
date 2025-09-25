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

	let selectedTheme = $state('adonai');
	let selectedHeadingFont = $state(`'Montserrat', san-serif`);
	let selectedBodyFont = $state(`'Inter', san-serif`);

	$effect(() => {
		const _selectedTheme = localStorage.getItem('data-theme');
		const _selectedHeadingFont = localStorage.getItem('--font-heading');
		const _selectedBodyFont = localStorage.getItem('--font-body');

		if (_selectedTheme) {
			selectedTheme = _selectedTheme;
		}
		if (_selectedHeadingFont) {
			selectedHeadingFont = _selectedHeadingFont;
		}
		if (_selectedBodyFont) {
			selectedBodyFont = _selectedBodyFont;
		}
	});
	$effect(() => {
		document.documentElement.setAttribute('data-theme', selectedTheme);
		localStorage.setItem('data-theme', selectedTheme);
	});
	$effect(() => {
		document.documentElement.style.setProperty('--font-heading', selectedHeadingFont);
		localStorage.setItem('--font-heading', selectedHeadingFont);
	});
	$effect(() => {
		document.documentElement.style.setProperty('--font-body', selectedBodyFont);
		localStorage.setItem('--font-body', selectedBodyFont);
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
				{#each themes as theme, i (theme + i)}
					<option class="captialise" value={theme}>{theme}</option>
				{/each}
			</select>
		</fieldset>
		<fieldset class="fieldset">
			<legend class="fieldset-legend">Heading font</legend>
			<select class="select w-full" bind:value={selectedHeadingFont}>
				<option disabled selected>Pick a font</option>
				{#each fonts as font, i (font + i)}
					<option class="captialise" value={font}>{font}</option>
				{/each}
			</select>
		</fieldset>
		<fieldset class="fieldset">
			<legend class="fieldset-legend">Body font</legend>
			<select class="select w-full" bind:value={selectedBodyFont}>
				<option disabled selected>Pick a font</option>
				{#each fonts as font, i (font + i)}
					<option class="captialise" value={font}>{font}</option>
				{/each}
			</select>
		</fieldset>
		<div class="modal-action justify-center">
			<button onclick={() => history.back()} class="btn w-full btn-primary">Done</button>
		</div>
	</div>
</div>
