<script lang="ts">
	let {
		heading = 'Partner with Us in Ministry',
		text = 'Your giving helps us reach more people with God’s love.'
	} = $props();
</script>

<section class="hero bg-base-200 py-12">
	<div class="hero-content flex-col text-center">
		<h2 class="mb-2 text-3xl font-bold">{heading}</h2>
		<p class="mb-4">{text}</p>
		<a href="/give" class="btn btn-accent">Give Online</a>
	</div>
</section>
