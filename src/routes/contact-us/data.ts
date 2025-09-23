import { Input, Textarea } from '$lib/components';

export const contactUsFormFields = [
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
		type: 'text',
		component: Input,
		label: 'Subject',
		placeholder: 'Reason for contact',
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
		label: 'Message',
		placeholder: 'Details of contact reason',
		validatorHint: 'Must be 3 to 30 characters',
		props: {
			title: 'Only letters',
			maxlength: 30,
			minlength: 3,
			class: 'validator input textarea input-md h-24'
		}
	}
];
