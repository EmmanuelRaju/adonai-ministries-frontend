<script>
	import { Hero } from '$lib/components';
	import { praiseReportFormFields } from './data';
</script>

<Hero title="Praise reports" />

<section class="container-width mx-auto p-4 pt-8 md:text-justify">
	<p class="drop-cap">
		The Living WORD of the Loving GOD, time and time again, testifies to the Love of the
		Compassionate Father, the Presence of Almighty God, The Power of the Most High God, the Glory of
		the Merciful God and Goodness of the Gracious Lord. “The heavens declare the glory of God; the
		skies proclaim the work of his hands.” (Psa 19:1). When our Lord Jesus Christ walked on this
		earth He spoke the waters stood still; dead rose to life; lepers were cleansed; devils were cast
		out; five bread and two fishes were more than enough to feed about five thousand men, women and
		children; water turned into wine; sick were healed; impotent received life in their body; sins
		were forgiven; In John 21:24,25, ” the apostle writes, This is the disciple who testifies of
		these things, and wrote these things; and we know that his testimony is true. And there are also
		many other things that Jesus did, which if they were written one by one, I suppose that even the
		world itself could not contain the books that would be written”.
	</p>
	<p>
		Following are the Testimonies of the dear saints of God, which they have kindly shared to
		glorify our Lord and to encourage you. The Bible declares in Rev 12:11, ” They overcame him by
		the blood of the lamb and by the word of their testimony and they loved not their lives unto
		death”. Our God is the living God indeed. “Jesus Christ is the same yesterday, today and for
		ever”(Heb 13:8). “Faith comes by hearing and hearing by the Word of God”(Rom 10:17). What God
		has promised, He will also accomplish (Rom 4:21). Let not your heart be troubled neither let it
		be afraid (John 14:27). Believe in God and also in Christ Jesus (John 14:1). God Bless you.
	</p>

	<section class="mt-8">
		<h2 class="text-center">Share Your Testimony</h2>
		<form class="mx-auto flex flex-col gap-3 md:w-80">
			{#each praiseReportFormFields as field}
				<field.component
					type={field.type}
					label={field.label}
					class="validator input input-md"
					placeholder={field.placeholder}
					validatorHint={field.validatorHint}
					options={field.options ?? []}
					{...field.props}
				></field.component>
			{/each}
			<button class="btn mt-2" type="submit">Submit testimony</button>
		</form>
	</section>
</section>
