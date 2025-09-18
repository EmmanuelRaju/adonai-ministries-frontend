<script lang="ts">
	import { showScrollToTop } from '$lib/stores/show-scroll-to-top';
	import { ArrowUp } from '@lucide/svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		const handleScroll = () => {
			$showScrollToTop = window.scrollY > 50;
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Initial check on load

		return () => window.removeEventListener('scroll', handleScroll);
	});

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

{#if $showScrollToTop}
	<button
		type="button"
		class="btn fixed right-5 bottom-16 btn-circle btn-primary md:right-[30px]"
		onclick={scrollToTop}
		aria-label="Scroll to top"
	>
		<ArrowUp></ArrowUp>
	</button>
{/if}
