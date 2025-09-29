<script lang="ts">
	import { PUBLIC_BASE_URL } from '$env/static/public';

	let {
		title,
		description,
		image = '/og-image.png',
		url
	}: { title: string; description: string; image?: string; url: string } = $props();

	const baseUrl = PUBLIC_BASE_URL;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content="adonai ministries, selva manuel, gospel, prayer, bible, church" />

	<!-- Canonical -->
	<link rel="canonical" href={`${baseUrl}${url}`} />

	<!-- OpenGraph -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={image} />
	<meta property="og:url" content={`${baseUrl}${url}`} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
</svelte:head>
