import { Input, Textarea } from '$lib/components';

export const contactUsFormFields = [
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
		type: 'text',
		component: Input,
		label: 'Subject',
		placeholder: 'Reason for contact',
		validatorHint: 'Cannot be empty',
		props: {
			required: true,
			title: 'Only letters',
			maxlength: 30,
			minlength: 1
		}
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
			class: 'validator input textarea input-md h-24',
			required: true
		}
	}
];
