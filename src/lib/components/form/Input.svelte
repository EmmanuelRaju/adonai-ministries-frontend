<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	let {
		label = '',
		validatorHint = '',
		value = $bindable(),
		...rest
	}: HTMLInputAttributes & { label?: string; validatorHint?: string } = $props();
</script>

<fieldset class="fieldset">
	{#if label}
		<legend class="fieldset-legend">{label}</legend>
	{/if}
	<input {...rest} class="w-full {rest?.class || ''}" />
	<p class="validator-hint mt-0 hidden transition duration-200">{validatorHint}</p>
</fieldset>
