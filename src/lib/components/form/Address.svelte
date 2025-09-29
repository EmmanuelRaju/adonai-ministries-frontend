<script lang="ts">
	import { Input, Select } from '$lib/components';
	import { countries } from '$lib/data/countries';

	let { label, required = false }: { label: string; required?: boolean } = $props();

	const addressFormFields = [
		{
			type: 'text',
			component: Input,
			label: '',
			placeholder: 'Google maps location link (optional)',
			validatorHint: 'Cannot be empty',
			props: {
				name: `${label.toLowerCase().replace(/\s+/g, '_')}_location`,
				required: false
			}
		},
		{
			type: 'text',
			component: Input,
			label: '',
			placeholder: 'Street address',
			validatorHint: 'Cannot be empty',
			props: {
				name: `${label.toLowerCase().replace(/\s+/g, '_')}_street_line_1`,
				required: required,
				title: 'Only letters',
				maxlength: 30,
				minlength: 1
			}
		},
		{
			type: 'text',
			component: Input,
			label: '',
			placeholder: 'Street address line 2',
			validatorHint: 'Cannot be empty',
			props: {
				name: `${label.toLowerCase().replace(/\s+/g, '_')}_street_line_2`,
				required: required,
				title: 'Only letters',
				maxlength: 30,
				minlength: 1
			}
		},
		{
			type: 'text',
			component: Input,
			label: '',
			placeholder: 'City',
			validatorHint: 'Cannot be empty',
			props: {
				name: `${label.toLowerCase().replace(/\s+/g, '_')}_city`,
				required: required,
				title: 'Only letters',
				maxlength: 30,
				minlength: 1
			}
		},
		{
			type: 'text',
			component: Input,
			label: '',
			placeholder: 'State',
			validatorHint: 'Cannot be empty',
			props: {
				name: `${label.toLowerCase().replace(/\s+/g, '_')}_state`,
				required: required,
				title: 'Only letters',
				maxlength: 30,
				minlength: 1
			}
		},
		{
			type: 'text',
			component: Input,
			label: '',
			placeholder: 'Zipcode',
			validatorHint: 'Cannot be empty',
			props: {
				name: `${label.toLowerCase().replace(/\s+/g, '_')}_zipcode`,
				required: required,
				title: 'Only letters',
				maxlength: 30,
				minlength: 1
			}
		},
		{
			component: Select,
			label: '',
			validatorHint: 'Required',
			props: {
				name: `${label.toLowerCase().replace(/\s+/g, '_')}_country`,
				required: required
			},
			options: [
				{ value: '', label: 'Choose country', disabled: true, selected: true },
				...Object.values(countries).map((country) => ({
					value: country,
					label: country
				}))
			]
		}
	];
</script>

<fieldset class="fieldset">
	{#if label}
		<legend class="fieldset-legend">{label}</legend>
	{/if}
	{#each addressFormFields as field, i (i)}
		<field.component
			type={field.type}
			label={field.label}
			class="validator input input-md"
			placeholder={field.placeholder}
			validatorHint={field.validatorHint}
			options={field.options ?? []}
			{...field.props}
		></field.component>
	{/each}
</fieldset>
