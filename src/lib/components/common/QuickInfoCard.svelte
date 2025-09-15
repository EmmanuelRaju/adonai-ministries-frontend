<script lang="ts">
	let {
		heading,
		text,
		link = null
	}: { heading: string; text: string; link?: string | null } = $props();
</script>

<div class="card-border card shadow-lg transition hover:shadow-xl">
	<div class="card-body">
		<h2 class="card-title">{heading}</h2>
		<p>{text}</p>
		{#if link}
			<div class="mt-4 card-actions justify-end">
				<a href={link} class="btn btn-sm btn-secondary">Learn More</a>
			</div>
		{/if}
	</div>
</div>
