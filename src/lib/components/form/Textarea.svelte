<script lang="ts">
	import type { HTMLTextareaAttributes } from 'svelte/elements';

	let {
		label,
		validatorHint = '',
		value = $bindable(),
		...rest
	}: HTMLTextareaAttributes & { label: string; validatorHint?: string } = $props();
</script>

<fieldset class="fieldset">
	<legend class="fieldset-legend">{label}</legend>
	<textarea {...rest} class="w-full {rest.class || ''}"></textarea>
	<p class="validator-hint mt-0 hidden transition duration-200">{validatorHint}</p>
</fieldset>
