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
				id: 'ministry',
				label: 'The Ministry',
				href: '/about/ministry'
			},
			{
				id: 'faith-statement',
				label: 'Statement Of Faith',
				href: '/about/statement-of-faith'
			}
		]
	},
	{
		id: 'christ',
		label: 'The Christ',
		children: [
			{
				id: 'miraculous-word',
				label: 'Miraculous Word',
				href: '/about/miraculous-word'
			},
			{
				id: 'miraculous-salvation',
				label: 'Miracle of Salvation',
				href: '/about/miracle-of-salvation'
			},
			{
				id: 'miraculous-healing',
				label: 'Miracle of Healing',
				href: '/about/miracule-of-healing'
			}
		]
	},
	{
		id: 'events',
		label: 'Events',
		children: [
			{
				id: 'gathering',
				label: `Adonai's gathering`,
				href: '/events/adonai-gathering'
			}
		]
	},
	{
		id: 'broadcast',
		label: 'Broadcast',
		children: [
			{
				id: 'adonai-voice',
				label: `Adonai's voice`,
				href: '/broadcast/adonai-voice'
			},
			{
				id: 'broadcat-listing',
				label: `Broadcast listing`,
				href: '/broadcast/broadcast-listing'
			}
		]
	},
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
				id: 'praise-reports',
				label: 'Praise reports',
				href: '/prayer/prayer-requests'
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
