import { Input, Select, Textarea } from '$lib/components';
import { countries } from 'countries-list';

export const praiseReportFormFields = [
	{
		type: 'text',
		component: Input,
		label: 'Name',
		placeholder: 'Full name',
		validatorHint: 'Must be 3 to 30 characters',
		props: {
			required: true,
			title: 'Only letters',
			maxlength: 30,
			minlength: 3
		}
	},
	{
		type: 'email',
		component: Input,
		label: 'Email',
		placeholder: 'mail@site.com',
		validatorHint: 'Enter valid email address',
		props: {
			required: true
		}
	},
	{
		component: Select,
		label: 'Country',
		validatorHint: 'Required',
		props: {
			required: true
		},
		options: [
			{ value: '', label: 'Choose', disabled: true, selected: true },
			...Object.values(countries).map((country) => ({
				value: country.name,
				label: country.name
			}))
		]
	},
	{
		type: 'text',
		component: Input,
		label: 'Prayer request was for',
		placeholder: 'Original prayer request',
		validatorHint: 'Must be 3 to 30 characters',
		props: {
			required: true,
			title: 'Only letters',
			maxlength: 30,
			minlength: 3
		}
	},
	{
		type: 'textarea',
		component: Textarea,
		label: 'Testimony',
		placeholder: 'Share how God answered your prayer',
		validatorHint: 'Must be 3 to 500 characters',
		props: {
			title: 'Share your testimony',
			maxlength: 500,
			minlength: 3,
			class: 'validator input textarea input-md h-24'
		}
	}
];
