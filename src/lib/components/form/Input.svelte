<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	let {
		label,
		validatorHint = '',
		value = $bindable(),
		...rest
	}: HTMLInputAttributes & { label: string; validatorHint?: string } = $props();
</script>

<fieldset class="fieldset">
	<legend class="fieldset-legend">{label}</legend>
	<input {...rest} />
	<p class="validator-hint hidden transition duration-200">{validatorHint}</p>
</fieldset>
