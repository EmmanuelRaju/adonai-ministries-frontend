<script lang="ts">
	let {
		title,
		description,
		link = null
	}: { title: string; description: string; link?: string | null } = $props();
</script>

<div class="card-border card shadow-lg transition hover:shadow-xl">
	<div class="card-body">
		<h3 class="card-title">{title}</h3>
		<p>{description}</p>
		{#if link}
			<a href={link} class="btn mt-3 btn-sm btn-primary">Learn More</a>
		{/if}
	</div>
</div>
