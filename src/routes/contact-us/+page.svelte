<script>
	import { Hero } from '$lib/components';
	import { contactUsFormFields } from './data';
</script>

<Hero title="Contact us" />

<section class="container-width mx-auto p-4 pt-8 md:text-justify">
	<p class="drop-cap">
		If there are any spiritual questions or would like to know more about AMI, please contact us
		using the information below. We are looking forward to hear from you!
	</p>
	<div class="mt-10 flex flex-col justify-between gap-10 md:flex-row md:gap-20">
		<address class="flex flex-col">
			Adonai’s Ministries International<br />
			P.O.Box 118692<br />
			Carrollton, TX 75011-8692<br />
			<a href="tel:4693277000">(469)327-7000</a>
			<a href="tel:855ADONAIS">(855)-ADONAIS</a>
			<a href="mailto:inforequest@selvamanuel.org">inforequest@selvamanuel.org</a>
		</address>
		<form class="flex flex-col gap-3 md:w-80">
			{#each contactUsFormFields as field}
				<field.component
					type={field.type}
					label={field.label}
					class="validator input input-md"
					placeholder={field.placeholder}
					validatorHint={field.validatorHint}
					{...field.props}
				></field.component>
			{/each}
			<button class="btn mt-2" type="submit">Contact us</button>
		</form>
	</div>
</section>
