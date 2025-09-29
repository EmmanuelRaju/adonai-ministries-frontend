<script lang="ts">
	import { Blockquote, Hero } from '$lib/components';
	import healing from '$lib/assets/images/healing.jpg?enhanced';

	const verses = [
		{
			verse: `He was despised and rejected by men, a man of sorrows, and familiar with suffering. Like one from whom men hide their faces he was despised, and we esteemed him not. Surely he took up our infirmities and carried our sorrows, yet we considered him stricken by God, smitten by him, and afflicted. But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was upon him, and by his wounds we are healed.`,
			reference: `isaiah 53:3-5`
		},
		{
			verse: `Jesus Christ himself bore our sins in his body on the tree, so that we might die to sins and live for righteousness; by his wounds you have been healed.`,
			reference: `1 peter 2:24`
		},
		{
			verse: `Christ redeemed us from that self-defeating, cursed life by absorbing it completely into himself. Do you remember the Scripture that says, “Cursed is everyone who hangs on a tree”? That is what happened when Jesus was nailed to the cross: He became a curse, and at the same time dissolved the curse. And now, because of that, the air is cleared and we can see that Abraham’s blessing is present and available for non-Jews, too. We are all able to receive God’s life, his Spirit, in and with us by believing – just the way Abraham received it.`,
			reference: `galatians 3:13,14`
		},
		{
			verse: `He sent His word and healed them, And delivered them from their destructions.`,
			reference: `psalms 107:20`
		},
		{
			verse: `People brought to him all who were ill with various diseases, those suffering severe pain, the demon-possessed, those having seizures, and the paralyzed, and he healed them.`,
			reference: `matthew 4:24`
		},
		{
			verse: `Many who were demon-possessed were brought to him, and he drove out the spirits with a word and healed all the sick.`,
			reference: `matthew 8:16`
		},
		{
			verse: `He had compassion on them and healed their sick.`,
			reference: `matthew 14:14`
		},
		{
			verse: `Jesus Christ healed those who needed healing.`,
			reference: `luke 9:11`
		}
	];

	const miracleReceptionVerses = [
		{
			verse: `Whoever calls on the name of the Lord shall be saved`,
			reference: `romans 10:13`
		},
		{
			verse: `Do not let your hearts be troubled. Trust in GOD; trust also in CHIRST JESUS.`,
			reference: `john 14:1`
		},
		{
			verse: `If you would believe you would see the glory of God`,
			reference: `john 11:40`
		},
		{
			verse: `Jesus answered and said to them, “Have faith in God”.`,
			reference: `mark 11:22`
		},
		{
			verse: `FAITH comes by hearing, and hearing by the word of God.`,
			reference: `romans 10:17`
		},
		{
			verse: `Abraham prayed to God, and God healed.`,
			reference: `genesis 20:17`
		},
		{
			verse: `O LORD my God, I called to you for help and you healed me.`,
			reference: `psalms 30:2`
		},
		{
			verse: `Heal me, O LORD, and I will be healed; save me and I will be saved, for you are the one I praise.`,
			reference: `jeremiah 17:14`
		},
		{
			verse: `A woman who had been subject to bleeding for twelve years came up behind him and touched the edge of his cloak. She said to herself, “If I only touch his cloak, I will be healed.” Jesus turned and saw her. ”Take heart, daughter,” he said, ”your faith has healed you.” And the woman was healed from that moment.`,
			reference: `matthew 9:20-22`
		},
		{
			verse: `All who touched him were healed.`,
			reference: `mark 6:56`
		},
		{
			verse: `“Go,” said Jesus, “your faith has healed you.” Immediately he received his sight and followed Jesus along the road.`,
			reference: `mark 10:52`
		},
		{
			verse: `People had come to hear him and to be healed of their diseases. Those troubled by evil spirits were cured, and the people all tried to touch him, because power was coming from him and healing them all.`,
			reference: `luke 6:18,19`
		},
		{
			verse: `Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous man is powerful and effective.`,
			reference: `james 5:16`
		}
	];
</script>

<Hero title="Miracle of healing" img={healing} />

<section class="container-width mx-auto p-4 md:text-justify">
	<p class="drop-cap">
		When our Lord Jesus Christ accomplished our Salvation on the cross, He accomplished Salvation of
		our Souls, Healing of our Body and Mind, Deliverance from the oppression of the devil and
		Sanctification of our Saved being.
	</p>
	<div class="flex flex-col gap-5">
		{#each verses as it, i (i)}
			<Blockquote quote={it.verse} cite={it.reference} dir={i % 2 == 0 ? 'left' : 'right'}
			></Blockquote>
		{/each}
	</div>
	<h2>How can I receive my miracle?</h2>
	<div class="flex flex-col gap-5">
		{#each miracleReceptionVerses as it, i (i)}
			<Blockquote quote={it.verse} cite={it.reference} dir={i % 2 == 0 ? 'left' : 'right'}
			></Blockquote>
		{/each}
	</div>
</section>
