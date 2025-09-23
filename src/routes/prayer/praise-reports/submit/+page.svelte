<script>
	import { Hero } from '$lib/components';
	import { submitPraiseReportFields } from './data';
</script>

<Hero title="Share praise report" />

<section class="container-width mx-auto p-4 pt-8 md:text-justify">
	<p class="drop-cap">
		We thank you for taking time to share your praise report with us. We join with you in praising
		God as our Lord answered the prayer. May our Lord God’s Glorious Face continue to shine upon you
		and the Blessed Hand of our compassionate Father continue to engulf you.When we come to our God
		He heals us but when we come back to our Lord with thanksgiving, He makes us whole (Luke
		17:17-19). Our Lord always loves people who are thankful to Him .
	</p>
	<p>
		The Bible declares in Revelation 12: 11, “We overcome by the Blood of the Lamb of God and by the
		Word of our Testimony”. Your Testimony is a seed for more miracles. Thank you for helping us let
		others know what God is doing, for His Glory. God Bless You.
	</p>
	<section>
		<h2 class="text-center">Please fill out the following and let us know what God has done</h2>
		<form class="mx-auto flex flex-col gap-3 md:w-80">
			{#each submitPraiseReportFields as field}
				<field.component
					type={field.type}
					label={field.label}
					class="validator {field.props.class}"
					placeholder={field.placeholder}
					validatorHint={field.validatorHint}
					options={field.options ?? []}
					{...field.props}
				></field.component>
			{/each}
			<button class="btn mt-2" type="submit">Submit request</button>
		</form>
	</section>
</section>
