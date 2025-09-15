<script lang="ts">
	let {
		title = 'Welcome to Adonai Ministries',
		subtitle = 'Experience God’s love. Join us this Sunday.'
	} = $props();
</script>

<section class="relative hero min-h-[70vh] bg-base-200">
	<div class="bg-opacity-30 hero-overlay"></div>
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="mb-4 text-4xl font-bold">{title}</h1>
			<p class="mb-6">{subtitle}</p>
			<div class="flex flex-wrap justify-center gap-4">
				<a class="btn btn-primary">Visit Us</a>
				<a class="btn btn-outline">Watch Online</a>
			</div>
		</div>
	</div>
</section>
