<script lang="ts">
	import type { TNavLink } from '$lib/models';
	import logo from '$lib/assets/logo-cropped.png?enhanced';
	import { slide } from 'svelte/transition';
	import ThemeSwitcher from './ThemeSwitcher.svelte';

	let { navLinks }: { navLinks: TNavLink[] } = $props();

	let activeSubMenuId: string | null = $state(null);

	let drawer: HTMLInputElement | null = $state(null);

	let openDrawer = $state(false);
	let showHamburgerIcon = $derived(openDrawer);
</script>

<header class="flex w-full items-center p-2.5 shadow-sm">
	<a href="/" aria-label="AMI" class="w-14 lg:w-20">
		<enhanced:img src={logo} alt="AMI" class="h-full w-full object-contain"></enhanced:img>
	</a>
	<ul class="mx-auto hidden items-center gap-5 lg:flex">
		{#each navLinks as navLink (navLink.id)}
			{@render desktopNavLink(navLink)}
		{/each}
	</ul>

	<div class="drawer justify-end lg:hidden">
		<input
			bind:this={drawer}
			id="my-drawer"
			type="checkbox"
			class="drawer-toggle"
			bind:checked={openDrawer}
		/>
		<div class="drawer-content">
			<!-- Page content here -->
			<label for="my-drawer" class="drawer-button btn btn-ghost hover:btn-primary">
				<label class="swap swap-rotate">
					<!-- this hidden checkbox controls the state -->
					<input
						type="checkbox"
						onchange={() => (openDrawer = !openDrawer)}
						bind:checked={showHamburgerIcon}
					/>

					<!-- hamburger icon -->
					<svg
						class="swap-off fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 512 512"
					>
						<path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
					</svg>

					<!-- close icon -->
					<svg
						class="swap-on fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 512 512"
					>
						<polygon
							points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
						/>
					</svg>
				</label>
			</label>
		</div>
		<div class="drawer-side">
			<label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
			<ul class="min-h-full w-80 divide-y-2 divide-primary bg-base-200 text-base-content">
				<!-- Sidebar content here -->

				{#each navLinks as navLink (navLink.id)}
					{@render mobileNavLink(navLink)}
				{/each}
			</ul>
		</div>
	</div>
	<ThemeSwitcher></ThemeSwitcher>
</header>

{#snippet desktopNavLink(params: TNavLink)}
	<li class:hidden={params.hide?.lg}>
		{#if params.href}
			<a href={params.href} class="nav-link">{params.label}</a>
		{:else if params.children && params.children.length > 0}
			<div class="group relative">
				<p
					class="p-2.5 text-lg font-semibold whitespace-nowrap group-hover:bg-primary group-hover:text-primary-content"
				>
					{params.label}
				</p>
				<ul
					class="invisible absolute flex flex-col overflow-clip border border-base-100 bg-base-100 shadow-md group-hover:visible"
				>
					{#each params.children as item}
						<a href={item.href} class="nav-link">{item.label}</a>
					{/each}
				</ul>
			</div>
		{/if}
	</li>
{/snippet}

{#snippet mobileNavLink(params: TNavLink)}
	<li class:hidden={params.hide?.sm}>
		{#if params.href}
			<a
				href={params.href}
				class="nav-link block"
				onclick={() => {
					if (drawer) drawer.checked = false;
				}}>{params.label}</a
			>
		{:else if params.children && params.children.length > 0}
			<button
				class="flex w-full justify-between p-2.5 text-left text-lg font-semibold whitespace-nowrap {activeSubMenuId ===
				params.id
					? 'bg-primary text-primary-content'
					: ''}"
				onclick={() => (activeSubMenuId = params.id)}
			>
				<p>{params.label}</p>
				<p>{activeSubMenuId === params.id ? '–' : '+'}</p>
			</button>
			{#if activeSubMenuId === params.id}
				<ul class="flex flex-col overflow-clip" transition:slide>
					{#each params.children as item}
						<a
							href={item.href}
							class="nav-link block"
							onclick={() => {
								if (drawer) drawer.checked = false;
							}}
						>
							<span class="ml-4">{item.label}</span>
						</a>
					{/each}
				</ul>
			{/if}
		{/if}
	</li>
{/snippet}
