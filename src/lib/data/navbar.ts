import type { TNavLink } from '$lib/models';

export const navlinks: TNavLink[] = [
	{
		id: 'home',
		label: 'Home',
		href: '/'
	},
	{
		id: 'about',
		label: 'About AMI',
		children: [
			{
				id: 'selva-manuel',
				label: 'Selva Manuel',
				href: '/about/selva-manuel'
			},
			{
				id: 'faith-statement',
				label: 'Statement Of Faith',
				href: '/about/statement-of-faith'
			},
			{
				id: 'declarations',
				label: 'Declarations',
				href: '/about/declarations'
			}
		]
	},
	{
		id: 'christ',
		label: 'The Christ',
		children: [
			{
				id: 'who-is-jesus',
				label: 'Who is Jesus Christ',
				href: '/the-christ/who-is-jesus'
			},
			{
				id: 'miraculous-word',
				label: 'Miraculous Word',
				href: '/the-christ/miraculous-word'
			},
			{
				id: 'miraculous-salvation',
				label: 'Miracle of Salvation',
				href: '/the-christ/miracle-of-salvation'
			},
			{
				id: 'miraculous-healing',
				label: 'Miracle of Healing',
				href: '/the-christ/miracle-of-healing'
			}
		]
	},
	{
		id: 'events',
		label: 'Events',
		href: '/events'
	},
	// {
	// 	id: 'broadcast',
	// 	label: 'Broadcast',
	// 	children: [
	// 		{
	// 			id: 'adonai-voice',
	// 			label: `Adonai's voice`,
	// 			href: '/broadcast/adonai-voice'
	// 		},
	// 		{
	// 			id: 'broadcat-listing',
	// 			label: `Broadcast listing`,
	// 			href: '/broadcast/broadcast-listing'
	// 		}
	// 	]
	// },
	{
		id: 'prayer',
		label: 'Prayer',
		children: [
			{
				id: 'prayer-request',
				label: 'Prayer requests',
				href: '/prayer/prayer-requests'
			},
			{
				id: 'share-praise-reports',
				label: 'Share praise report',
				href: '/prayer/praise-reports/submit'
			},
			{
				id: 'praise-reports',
				label: 'Praise reports',
				href: '/prayer/praise-reports'
			}
		]
	},
	{
		id: 'giving',
		label: 'Giving',
		href: '/giving'
	},
	{
		id: 'invitations',
		label: 'Invitations',
		href: '/invitations'
	},
	{
		id: 'contact-us',
		label: 'Contact Us',
		href: '/contact-us'
	},
	{
		id: 'terms',
		label: 'Terms of use',
		href: '/terms-of-use',
		hide: {
			lg: true
		}
	},
	{
		id: 'privacy-policy',
		label: 'Privacy policy',
		href: '/privacy-policy',
		hide: {
			lg: true
		}
	}
];
