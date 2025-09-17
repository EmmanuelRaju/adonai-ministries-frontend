<script lang="ts">
	import bible from '$lib/assets/images/bible.jpg';
	let { title = 'Adonai Ministries International', img = bible } = $props();
</script>

<section style="background-image: url({img});" class="relative hero min-h-[70vh] bg-base-200">
	<div class="bg-opacity-30 hero-overlay"></div>
	<div class="hero-content text-center">
		<h1 class="container-width text-5xl font-bold text-white xl:text-7xl">{title}</h1>
	</div>
</section>
