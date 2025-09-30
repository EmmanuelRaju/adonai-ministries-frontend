import { Address, Input } from '$lib/components';

export const invitationFormFields = [
	{
		type: 'text',
		component: Input,
		label: 'Church/Organization name',
		placeholder: '',
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
		label: 'Pastor/Organization director',
		placeholder: '',
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
		type: 'text',
		component: Input,
		label: 'Admin/Exec assistant',
		placeholder: '',
		validatorHint: 'Cannot be empty',
		props: {
			required: false,
			title: 'Only letters',
			maxlength: 30,
			minlength: 1
		}
	},
	{
		type: 'tel',
		component: Input,
		label: 'Phone',
		placeholder: '',
		validatorHint: 'Required to enter valid number',
		props: {
			required: true,
			pattern: '^\\+?[1-9][0-9\\-\\(\\)\\s]{9,}$',
			class: 'validator input input-md tabular-nums'
		}
	},
	{
		type: 'text',
		component: Input,
		label: 'Website',
		placeholder: '',
		validatorHint: 'Cannot be empty',
		props: {
			required: false,
			title: 'Only letters',
			maxlength: 30,
			minlength: 1
		}
	},
	{
		component: Address,
		label: 'Ministry address',
		props: {
			required: true
		}
	}
];

export const engagementFormFields = [
	{
		type: 'text',
		component: Input,
		label: 'Name of venue',
		placeholder: '',
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
		label: 'Expected attendance',
		placeholder: 'Eg: 23',
		validatorHint: 'Required',
		props: {
			required: false,
			title: 'Only letters',
			maxlength: 30,
			minlength: 1
		}
	},
	{
		component: Address,
		label: 'Venue address',
		props: {
			required: false
		}
	}
];
