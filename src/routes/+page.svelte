<script>
	import {
		Hero,
		QuickInfoCard,
		MinistryCard,
		FeaturedSermon,
		CallToAction,
		NewsletterSignup,
		ThemeSetter
	} from '$lib/components';
</script>

<Hero />

<section class="mx-auto my-12 grid max-w-screen-xl gap-6 px-4 md:grid-cols-3">
	<QuickInfoCard heading="Service Times" text="Sundays, 10:30 AM" />
	<QuickInfoCard heading="Latest Sermon" text="Listen to our most recent message" link="/sermons" />
	<QuickInfoCard heading="Upcoming Event" text="Community outreach on Sept 30" link="/events" />
</section>

<h2 class="mt-16 text-center text-3xl font-semibold">Get Involved</h2>
<section class="mx-auto my-8 grid max-w-screen-xl gap-6 px-4 md:grid-cols-3">
	<MinistryCard
		name="Youth Ministry"
		description="Helping young people grow in faith."
		link="/ministries/youth"
	/>
	<MinistryCard
		name="Worship Team"
		description="Join our worship team and serve with music."
		link="/ministries/worship"
	/>
	<MinistryCard
		name="Outreach"
		description="Serving our local community."
		link="/ministries/outreach"
	/>
</section>

<FeaturedSermon
	title="Faith in Action"
	date="Sept 10, 2025"
	embedUrl="https://www.youtube.com/embed/VIDEO_ID"
/>

<CallToAction />

<NewsletterSignup />

<ThemeSetter></ThemeSetter>
