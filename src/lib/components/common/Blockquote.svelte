<script lang="ts">
	import { revealOnScroll } from '$lib/utils/common';
	import { Quote } from '@lucide/svelte';

	let {
		quote,
		cite,
		classes = '',
		dir = 'left',
		isCiteFirst = false
	}: {
		quote: string;
		cite: string;
		classes?: string;
		dir?: 'left' | 'right';
		isCiteFirst?: boolean;
	} = $props();
</script>

<div
	use:revealOnScroll
	class="reveal-on-scroll--container blockquote relative overflow-hidden px-8 after:absolute after:top-[25px] after:h-full after:w-[3px] after:rounded-[100px] after:bg-primary after:opacity-90 after:content-[''] {dir ===
	'right'
		? 'after:right-[10px]'
		: 'after:left-[10px]'} {classes}"
>
	<div class="absolute text-primary {dir === 'right' ? 'right-0' : 'left-0'}">
		<Quote fill="var(--color-primary)"></Quote>
	</div>
	{#if isCiteFirst}
		<p class="text-primary {dir === 'right' ? 'text-right' : 'text-left'}">{cite}</p>
		<p class="md:text-justify">{@html quote}</p>
		<!-- <p class={dir === 'right' ? 'text-right' : 'text-left'}>{@html quote}</p> -->
	{:else}
		<p class={dir === 'right' ? 'text-right' : 'text-left'}>{@html quote}</p>
		<p class="text-primary capitalize {dir === 'right' ? 'text-right' : 'text-left'}">{cite}</p>
	{/if}
</div>
