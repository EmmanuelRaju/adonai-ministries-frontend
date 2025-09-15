<script lang="ts">
	let {
		title,
		date,
		embedUrl
	}: {
		title: string;
		date: string;
		embedUrl: string;
	} = $props();
</script>

<section class="py-12 text-center">
	<h2 class="mb-2 text-3xl font-semibold">Featured Sermon</h2>
	<p class="mb-6">{title} – {date}</p>
	<div class="aspect-w-16 aspect-h-9 mx-auto max-w-3xl">
		<iframe class="h-full w-full rounded-xl" src={embedUrl} title="Sermon Video" allowfullscreen>
		</iframe>
	</div>
</section>
