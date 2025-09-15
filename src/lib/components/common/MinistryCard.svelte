<script lang="ts">
	let {
		name,
		description,
		link = null
	}: { name: string; description: string; link?: string | null } = $props();
</script>

<div class="card bg-base-100 shadow-md transition hover:shadow-lg">
	<div class="card-body">
		<h3 class="card-title">{name}</h3>
		<p>{description}</p>
		{#if link}
			<a href={link} class="btn mt-3 btn-sm btn-primary">Learn More</a>
		{/if}
	</div>
</div>
