<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg?enhanced';
	import { navlinks } from '$lib/data/navbar';
	import { Navbar, Footer, ThemeSetter } from '$lib/components';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar navLinks={navlinks}></Navbar>
<main class="prose max-w-none">
	{@render children?.()}
</main>
<Footer></Footer>

<ThemeSetter></ThemeSetter>
