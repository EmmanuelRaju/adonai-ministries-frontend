import { Input, Radio, Select, Textarea } from '$lib/components';

export const submitPraiseReportFields = [
	{
		type: 'text',
		component: Input,
		label: 'Name',
		placeholder: 'Full name',
		validatorHint: 'Must be 3 to 30 characters',
		props: {
			class: 'input input-md',
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
			required: true,
			class: 'input input-md'
		}
	},
	{
		type: 'tel',
		component: Input,
		label: 'Phone',
		placeholder: 'Phone',
		validatorHint: 'Required',
		props: {
			required: true,
			pattern: '[0-9]*',
			class: 'validator input input-md tabular-nums'
		}
	},
	{
		type: 'text',
		component: Input,
		label: 'When did this occur',
		validatorHint: 'Must be 3 to 30 characters',
		props: {
			required: true,
			title: 'Only letters',
			maxlength: 30,
			minlength: 3,
			class: 'input input-md'
		}
	},
	{
		type: 'text',
		component: Input,
		label: 'Where did this occur',
		validatorHint: 'Must be 3 to 30 characters',
		props: {
			required: true,
			title: 'Only letters',
			maxlength: 30,
			minlength: 3,
			class: 'input input-md'
		}
	},
	{
		component: Textarea,
		label: 'Address',
		validatorHint: 'Must be 3 to 30 characters',
		props: {
			maxlength: 30,
			minlength: 3,
			class: 'validator input textarea input-md h-24'
		}
	},
	{
		component: Textarea,
		label: 'Praise report',
		validatorHint: 'Must be 3 to 30 characters',
		props: {
			required: true,
			maxlength: 30,
			minlength: 3,
			class: 'validator input textarea input-md h-24'
		}
	},
	{
		component: Select,
		label: 'You may share my testimony along with',
		validatorHint: 'Required',
		props: {
			required: true
		},
		options: [
			{ value: '', label: 'Choose', disabled: true, selected: true },
			...['Name', 'Initials', 'Name + State/Country', 'Initials + State/Country', 'Anonymous'].map(
				(option) => ({
					value: option,
					label: option
				})
			)
		]
	},
	{
		component: Radio,
		label: 'Please add me to mailing list',
		name: 'mailing-list',
		validatorHint: 'Required',
		value: 'yes',
		options: [
			{ id: 'yes', value: 'yes', label: 'Yes' },
			{ id: 'no', value: 'no', label: 'No' }
		],
		props: {
			required: true
		}
	}
];
