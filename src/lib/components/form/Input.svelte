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
	<input {...rest} />
	<p class="validator-hint hidden transition duration-200">{validatorHint}</p>
</fieldset>
