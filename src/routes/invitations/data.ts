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
		type: 'text',
		component: Input,
		label: 'Admin/Exec assitant',
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
			required: true,
			title: 'Only letters',
			maxlength: 30,
			minlength: 1
		}
	},
	{
		component: Address,
		label: 'Address of Church/Ministry'
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
			required: true,
			title: 'Only letters',
			maxlength: 30,
			minlength: 1
		}
	},
	{
		component: Address,
		label: 'Venue address'
	}
];
