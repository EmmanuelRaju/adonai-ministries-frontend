<script lang="ts">
	type RadioOption = {
		id: string;
		label: string;
		value: string;
	};

	let {
		label,
		options = [],
		validatorHint = '',
		name,
		value = $bindable('')
	}: {
		label: string;
		options: RadioOption[];
		validatorHint?: string;
		name: string;
		value: string;
	} = $props();
</script>

<fieldset class="fieldset">
	<legend class="fieldset-legend">{label}</legend>
	<div class="flex gap-5">
		{#each options as option}
			<label class="flex items-center gap-2" for={option.id}>
				<input
					{name}
					type="radio"
					id={option.id}
					value={option.value}
					bind:group={value}
					class="radio"
				/>
				<span>{option.label}</span>
			</label>
		{/each}
	</div>
	<p class="validator-hint mt-0 hidden transition duration-200">{validatorHint}</p>
</fieldset>
