import { Input, Select, Textarea } from '$lib/components';
import { countries } from '$lib/data/countries';
import { prayerRequestReasons } from '$lib/data/prayer-request';

export const prayerRequestFormFields = [
	{
		type: 'text',
		component: Input,
		label: 'Name',
		placeholder: 'Full name',
		validatorHint: 'Cannot be empty',
		props: {
			required: true,
			title: 'Only letters',
			maxlength: 30,
			minlength: 1
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
				value: country,
				label: country
			}))
		]
	},
	{
		type: 'text',
		component: Input,
		label: 'Prayer request is for',
		placeholder: 'Reason for request',
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
		label: 'Prayer need is',
		validatorHint: 'Required',
		props: {
			required: true
		},
		options: [
			{ value: '', label: 'Select below', disabled: true, selected: true },
			...prayerRequestReasons.map((reason) => ({
				value: reason,
				label: reason
			}))
		]
	},
	{
		type: 'textarea',
		component: Textarea,
		label: 'Message',
		placeholder: 'Details of contact reason',
		validatorHint: 'Cannot be empty or more than 1000 characters',
		props: {
			title: 'Only letters',
			maxlength: 1000,
			minlength: 1,
			class: 'validator input textarea input-md h-24'
		}
	}
];
