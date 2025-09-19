<script lang="ts">
	let { quote, cite }: { quote: string; cite: string } = $props();
</script>

<div class="blockquote text-left">
	<p>{quote}</p>
	<cite>{cite}</cite>
</div>

<style>
	.blockquote {
		--c1: #f0f8ff;
		--c2: var(--color-base-content);
		position: relative;
		padding: 2.5rem 2rem 4rem;
		margin: 2rem 1rem;
		color: var(--c2);
		background:
			conic-gradient(from 180deg at 100% calc(100% - 1rem), var(--c2) 0 25%, #fff0 0 100%),
			conic-gradient(from 180deg at 1rem 50%, var(--c2) 0 25%, #fff0 0 100%),
			conic-gradient(from 0deg at calc(100% - 1rem) 50%, var(--c2) 0 25%, #fff0 0 100%),
			conic-gradient(from 0deg at 0rem 1rem, var(--c2) 0 25%, #fff0 0 100%);
	}

	.blockquote:before,
	.blockquote:after {
		content: '';
		position: absolute;
		width: 3.5rem;
		height: 4.5rem;
		top: 3rem;
		left: -1rem;
		transform: rotate(5deg) scale(1.15);
		background:
			radial-gradient(circle at 1.75rem 3rem, var(--c2) 1.5rem, #fff0 calc(1.5rem + 1px)),
			radial-gradient(
				circle at 3.5rem 1.5rem,
				#fff0 2rem,
				var(--c2) calc(2rem + 1px) calc(4rem + 1px),
				#fff0 calc(4rem + 2px)
			);
		filter: drop-shadow(3.5rem -0.5rem 0px var(--c2));
		border-radius: 100%;
	}

	.blockquote:after {
		top: inherit;
		bottom: 3rem;
		transform: rotate(195deg) scale(1.15);
		right: -1rem;
		left: inherit;
	}

	.blockquote p {
		font-weight: bold;
	}

	.blockquote p:after {
		/* margin-right: 2rem; */
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: flex-start;
		content: '';
		display: inline-flex;
		background: #f000;
		width: 8rem;
		height: 3rem;
	}

	.blockquote p:first-letter {
		background: var(--c2);
		color: var(--c1);
		padding: 0 0.75rem;
		margin-top: 0;
		margin-left: 5rem;
		margin-right: 0.5rem;
		box-sizing: border-box;
		font-size: 4rem;
		float: left;
	}

	.blockquote cite {
		font-weight: bold;
		position: absolute;
		bottom: 2.5rem;
		background: var(--c2);
		color: var(--c1);
		right: 8rem;
		padding: 0.5rem 1rem;
	}
</style>
