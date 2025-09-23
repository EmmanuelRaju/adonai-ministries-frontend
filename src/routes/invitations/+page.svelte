<script>
	import { Hero } from '$lib/components';
</script>

<Hero title="Invitations" />

<section class="container-width mx-auto p-4 pt-8 md:text-justify">
	<p class="drop-cap">
		Thank you for your interest in the ministry of Bro.Selva Manuel. Please include the following
		information and your request will be prayerfully considered and responded promptly.
	</p>
	<form class="mx-auto flex flex-col gap-3">
		<fieldset class="fieldset">
			<legend class="fieldset-legend">Upload Formal Letter (Word/PDF)</legend>
			<input type="file" class="file-input" />
		</fieldset>
		<h2 class="text-left">Requesting ministry details</h2>
		<fieldset class="fieldset">
			<legend class="fieldset-legend">Name</legend>
			<input
				type="text"
				class="validator input input-md"
				required
				placeholder="Full name"
				title="Only letters"
				maxlength="30"
				minlength="3"
			/>
			<p class="validator-hint hidden transition duration-200">Must be 3 to 30 characters</p>
		</fieldset>
		<fieldset class="fieldset">
			<legend class="fieldset-legend">Email</legend>
			<input type="email" class="validator input input-md" placeholder="mail@site.com" required />
			<p class="validator-hint hidden transition duration-200">Enter valid email address</p>
		</fieldset>
		<fieldset class="fieldset">
			<legend class="fieldset-legend">Phone</legend>
			<input
				type="tel"
				placeholder="Phone"
				pattern="[0-9]*"
				class="validator input input-md tabular-nums"
				required
			/>
			<p class="validator-hint hidden transition duration-200">Required</p>
		</fieldset>
		<fieldset class="fieldset">
			<legend class="fieldset-legend">When did this occur</legend>
			<input
				type="text"
				class="validator input input-md"
				required
				title="Only letters"
				maxlength="30"
				minlength="3"
			/>
			<p class="validator-hint hidden transition duration-200">Must be 3 to 30 characters</p>
		</fieldset>
		<fieldset class="fieldset">
			<legend class="fieldset-legend">Where did this occur</legend>
			<input
				type="text"
				class="validator input input-md"
				required
				title="Only letters"
				maxlength="30"
				minlength="3"
			/>
			<p class="validator-hint hidden transition duration-200">Must be 3 to 30 characters</p>
		</fieldset>
		<fieldset class="fieldset">
			<legend class="fieldset-legend">Address</legend>
			<textarea class="validator input textarea input-md h-24" maxlength="30" minlength="3"
			></textarea>
			<p class="validator-hint hidden transition duration-200">Must be 3 to 30 characters</p>
		</fieldset>
		<fieldset class="fieldset">
			<legend class="fieldset-legend">Praise report</legend>
			<textarea class="validator input textarea input-md h-24" required maxlength="30" minlength="3"
			></textarea>
			<p class="validator-hint hidden transition duration-200">Must be 3 to 30 characters</p>
		</fieldset>

		<fieldset class="fieldset">
			<legend class="fieldset-legend">Please add me mailing list</legend>
			<div class="flex gap-5">
				<label for="yes">
					<input id="yes" type="radio" name="radio-1" class="radio" />
					Yes
				</label>
				<label for="no">
					<input id="no" type="radio" name="radio-1" class="radio" />
					No
				</label>
			</div>
			<p class="validator-hint hidden">Required</p>
		</fieldset>
		<button class="btn mt-2" type="submit">Submit request</button>
	</form>
</section>
