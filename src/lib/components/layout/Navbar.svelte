<script lang="ts">
	import type { TNavLink } from '$lib/models';

	const links: TNavLink[] = [
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
		}
	];
</script>

<div class="navbar bg-base-100 shadow-sm">
	<div class="navbar-start">
		<a href="/" class="btn text-xl btn-ghost">AMI</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal gap-5 px-1">
			{#each links as link (link.id)}
				{@render desktopNavLink(link)}
			{/each}
		</ul>
	</div>
	<div class="navbar-end">
		<div class="dropdown dropdown-end">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block h-5 w-5 stroke-current"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					></path>
				</svg>
			</div>
			<ul
				class="dropdown-content menu z-1 mt-3 w-52 max-w-[75vw] menu-md rounded-box bg-base-100 p-2 shadow"
			>
				{#each links as link (link.id)}
					{@render mobileNavLink2(link)}
				{/each}
			</ul>
		</div>
	</div>
</div>

{#snippet mobileNavLink(params: TNavLink)}
	<li>
		{#if params.href}
			<a href={params.href}>{params.label}</a>
		{:else}
			<p>{params.label}</p>
		{/if}
		{#if params.children && params.children.length > 0}
			<ul>
				{#each params.children as item}
					{@render mobileNavLink(item)}
				{/each}
			</ul>
		{/if}
	</li>
{/snippet}
{#snippet mobileNavLink2(params: TNavLink)}
	<li>
		{#if params.href}
			<a href={params.href}>{params.label}</a>
		{:else if params.children && params.children.length > 0}
			<div class="collapse-arrow collapse">
				<input type="radio" name="navlink-item" />
				<p class="collapse-title p-0">{params.label}</p>
				<div class="collapse-content p-0">
					{#each params.children as item}
						{@render mobileNavLink2(item)}
					{/each}
				</div>
			</div>
		{/if}
	</li>
{/snippet}

{#snippet desktopNavLink(params: TNavLink)}
	<li>
		{#if params.href}
			<a href={params.href}>{params.label}</a>
		{:else if params.children && params.children.length > 0}
			<div class="dropdown-hover dropdown dropdown-center">
				<div tabindex="0" role="button" class="">{params.label}</div>
				<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
				<ul tabindex="0" class="dropdown-content menu z-1 w-52 rounded-box bg-base-200 shadow-sm">
					{#each params.children as item}
						{@render desktopNavLink(item)}
					{/each}
				</ul>
			</div>
		{/if}
	</li>
{/snippet}
