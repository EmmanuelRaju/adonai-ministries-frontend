<script lang="ts">
	import type { HTMLSelectAttributes } from 'svelte/elements';

	type Option = {
		value: string;
		label: string;
		disabled?: boolean;
		selected?: boolean;
	};

	let {
		label,
		options = [],
		validatorHint = '',
		value = $bindable(),
		...rest
	}: HTMLSelectAttributes & {
		label: string;
		options: Option[];
		validatorHint?: string;
	} = $props();
</script>

<fieldset class="fieldset">
	<legend class="fieldset-legend">{label}</legend>
	<select {...rest} class="select w-full {rest?.class || ''}" bind:value>
		{#each options as option, i (option.value + i)}
			<option value={option.value} disabled={option.disabled} selected={option.selected}>
				{option.label}
			</option>
		{/each}
	</select>
	<p class="validator-hint mt-0 hidden transition duration-200">{validatorHint}</p>
</fieldset>
