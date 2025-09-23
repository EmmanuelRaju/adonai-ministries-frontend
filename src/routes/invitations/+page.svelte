<script>
	import { Hero } from '$lib/components';
	import { engagementFormFields, invitationFormFields } from './data';
</script>

<Hero title="Invitations" />

<section class="container-width mx-auto p-4 pt-8 md:text-justify">
	<p class="drop-cap">
		Thank you for your interest in the ministry of Bro.Selva Manuel. Please include the following
		information and your request will be prayerfully considered and responded promptly.
	</p>
	<fieldset class="fieldset">
		<legend class="fieldset-legend">Upload Formal Letter (Word/PDF)</legend>
		<input type="file" class="file-input" form="invitation" />
	</fieldset>
	<form class="mx-auto flex flex-col gap-3" id="invitation">
		<div class="flex flex-col justify-between md:flex-row md:gap-10">
			<div>
				<h2 class="text-left">Requesting ministry details</h2>
				{#each invitationFormFields as field}
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
			</div>
			<div>
				<h2 class="text-left">Engagement details</h2>
				{#each engagementFormFields as field}
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
			</div>
		</div>
		<button class="btn mt-2" type="submit">Submit request</button>
	</form>
</section>
