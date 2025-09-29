<script lang="ts">
	import '../app.css';
	// import favicon from '$lib/assets/favicon.svg';
	import { navlinks } from '$lib/data/navbar';
	import { Navbar, Footer, ThemeSetter } from '$lib/components';
	import ScrollToTop from '$lib/components/layout/ScrollToTop.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<!-- <link rel="icon" href={favicon} /> -->
	<link rel="icon" href="/logo.png" />
	<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Church",
      "name": "Adonai Ministries International",
      "url": PUBLIC_BASE_URL,
      "logo": PUBLIC_BASE_URL+"/logo.png",
      "sameAs": [
        "https://twitter.com/selva_manuel",
        "https://www.youtube.com/selvamanuel","https://www.facebook.com/selva.manuel","https://www.instagram.com/pastorselvamanuel/"
      ]
    }
	</script>
</svelte:head>

<Navbar navLinks={navlinks}></Navbar>
<main class="prose max-w-none">
	{@render children?.()}
</main>
<Footer></Footer>

<ScrollToTop></ScrollToTop>

<!-- <ThemeSetter></ThemeSetter> -->
