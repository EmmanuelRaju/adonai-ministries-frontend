<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg?enhanced';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import EmNavbar from '$lib/components/layout/EmNavbar.svelte';
	import { navlinks } from '$lib/data/navbar';
	import Footer from '$lib/components/layout/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- <Navbar></Navbar> -->
<EmNavbar navLinks={navlinks}></EmNavbar>
<main class="prose max-w-none">
	{@render children?.()}
</main>
<Footer></Footer>
