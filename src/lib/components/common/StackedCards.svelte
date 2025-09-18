<script lang="ts">
	import { fly } from 'svelte/transition';

	let { data }: { data: { text: string; subtext: string }[] } = $props();

	/** Intersection Observer action: adds .visible when in viewport */
	function revealOnScroll(node: HTMLElement) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						node.classList.add('visible');
						observer.unobserve(node);
					}
				});
			},
			{ threshold: 0.2 }
		);
		observer.observe(node);
		return {
			destroy() {
				observer.unobserve(node);
			}
		};
	}
</script>

<section class="flex flex-col gap-5 lg:gap-10">
	{#each data as item, i}
		<div
			use:revealOnScroll
			class="card-container relative"
			in:fly={{ y: 20, duration: 400, delay: i * 120 }}
		>
			<div class="card bg-base-100 shadow-sm">
				<span
					class="absolute right-6 bottom-2 text-center font-heading text-2xl text-nowrap text-secondary uppercase"
				>
					{item.subtext}
				</span>
				<div class="card-body">
					<p>{item.text}</p>
				</div>
			</div>
		</div>
	{/each}
</section>
