<script lang="ts">
	import { Blockquote, Hero, SEO } from '$lib/components';
	import salvation from '$lib/assets/images/salvation.jpg?enhanced';

	const verses = [
		{
			verse: `For God loved the world so much that He gave His one and only son, Jesus Christ, so that ever one who believes in Him will not perish but have everlasting life`,
			reference: 'john 3:16'
		},
		{
			verse: `God showed His great love for us by sending Christ to die for us while we were still sinners`,
			reference: 'romans 5:8'
		},
		{
			verse: `For God made Christ, who never sinned, to be offering for our sin, so that we could be made right with God through Christ`,
			reference: '2 corinthians 5:21'
		},
		{
			verse: `We have peace with God through our Lord Jesus Christ`,
			reference: 'romans 5:1'
		}
	];
</script>

<SEO
	title="AMI | Miracle of salvation"
	description="Our God is a GOD who saves. Verses from the Bible to help you receive your miracle."
	url="/the-christ/miracle-of-salvation"
></SEO>

<Hero title="Miracle of salvation" img={salvation} />

<section class="container-width mx-auto p-4 md:text-justify">
	<p class="drop-cap">
		When our Lord Jesus Christ accomplished our Salvation on the cross, He accomplished everything.
		The meaning of the root word for ‘Salvation’ is Deliverance, Aid, Victory, Prosperity, Health,
		Welfare, Avenge, Defend, Help, Preserve, Rescue and Saving Health.
	</p>
	<div class="flex flex-col gap-5">
		{#each verses as it, i (i)}
			<Blockquote quote={it.verse} cite={it.reference} dir={i % 2 == 0 ? 'left' : 'right'}
			></Blockquote>
		{/each}
	</div>

	<section>
		<h2>What is Salvation?</h2>
		<p>
			Salvation is not converting to a religion called Christianity but through salvation in Lord
			Jesus Christ we have relationship with God the Father.
		</p>

		<p>Salvation is Deliverance from:</p>

		<ul>
			<li>Sin and its Eternal consequences (Romans 5:1)</li>
			<li>Law and its curse (Galatians 3:13)</li>
			<li>Death (1Corianthians 15:56,57)</li>
			<li>Judgment and Wrath (Romans 5:9)</li>
			<li>Fear of Death (Hebrews 2:15,17,18)</li>
			<li>Bondage of Sin and Sickness (Galatians 5:1, I Pet 2:24)</li>
		</ul>
	</section>

	<section>
		<h2>Why Salvation?</h2>
		<p>
			For everyone has sinned; we all fall short of God’s glorious standard (Rom 3:23). For the
			wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord (Rom
			6:23). If our Lord tarries, all of us will die one day. Eternity waits for each one of us.
			Where we will spend our eternity depends on you and me. Everyone who is saved, will spend
			their eternity with the Lord forever (I Thes 4:17).
		</p>
	</section>
	<section>
		<h2>How can I be Saved?</h2>
		<p>
			If you confess with your mouth that Jesus is Lord and believe in your heart that God raised
			Him from the dead you will be saved. For it is by believing in your heart that you are made
			right with God and it is by confessing with your mouth you are saved (Romans 10: 9,10)
		</p>
	</section>
	<section>
		<h2>You can pray like the following</h2>
		<p>
			Loving Lord Jesus Christ, I believe that you are the son of God, died on the cross, and rose
			again on the third day. Thank you for forgiving my sins and washing me with your precious
			Blood. In your name I pray, Amen.
		</p>
	</section>
	<section>
		<h2>Welcome to the family of God</h2>
		<p>
			We believe that you are born again. We praise God for you and we rejoice with you. Now develop
			a life style of studying the Word of God, Praying, Listening and Doing according to the word
			of God. Join a Church which is founded according to the sound biblical doctrine and where the
			Word of God is preached. You are Blessed of God.
		</p>
	</section>
</section>
