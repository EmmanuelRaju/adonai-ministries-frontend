<script lang="ts">
	import { Input, Select } from '$lib/components';
	import { countries } from 'countries-list';

	let { label }: { label: string } = $props();

	const addressFormFields = [
		{
			type: 'text',
			component: Input,
			label: '',
			placeholder: 'Google maps location link (optional)',
			validatorHint: 'Cannot be empty'
		},
		{
			type: 'text',
			component: Input,
			label: '',
			placeholder: 'Street address',
			validatorHint: 'Cannot be empty',
			props: {
				required: true,
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
				required: true,
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
				required: true,
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
				required: true,
				title: 'Only letters',
				maxlength: 30,
				minlength: 1
			}
		},
		{
			type: 'number',
			component: Input,
			label: '',
			placeholder: 'Zipcode',
			validatorHint: 'Cannot be empty',
			props: {
				required: true,
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
				required: true
			},
			options: [
				{ value: '', label: 'Choose country', disabled: true, selected: true },
				...Object.values(countries).map((country) => ({
					value: country.name,
					label: country.name
				}))
			]
		}
	];
</script>

<fieldset class="fieldset">
	{#if label}
		<legend class="fieldset-legend">{label}</legend>
	{/if}
	{#each addressFormFields as field}
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
