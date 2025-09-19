<script lang="ts">
	import { Quote } from '@lucide/svelte';

	let {
		quote,
		cite,
		classes = '',
		dir = 'left'
	}: { quote: string; cite: string; classes?: string; dir?: 'left' | 'right' } = $props();
</script>

<div
	class="blockquote relative overflow-hidden px-8 after:absolute after:top-[25px] after:h-full after:w-[3px] after:rounded-[100px] after:bg-primary after:opacity-90 after:content-[''] {dir ===
	'right'
		? 'after:right-[10px]'
		: 'after:left-[10px]'} {classes}"
>
	<div class="absolute text-primary {dir === 'right' ? 'right-0' : 'left-0'}">
		<Quote fill="var(--color-primary)"></Quote>
	</div>
	<p class={dir === 'right' ? 'text-right' : 'text-left'}>{quote}</p>
	<p class="text-primary capitalize {dir === 'right' ? 'text-right' : 'text-left'}">{cite}</p>
</div>
