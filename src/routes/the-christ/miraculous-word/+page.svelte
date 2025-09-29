<script lang="ts">
	import { Hero, Blockquote, SEO } from '$lib/components';

	const verses = [
		{
			verse: `God did not send his Son into the world to condemn its people. He sent him to save them!`,
			reference: 'john 3:17'
		},
		{
			verse: `Love the Lord your God with all your heart and with all your soul and with all your mind. This is the first and greatest commandment. And the second is like it: Love your neighbor as yourself.’ All the Law and the Prophets hang on these two commandments.`,
			reference: 'matthew 22:37-40'
		},
		{
			verse: `Faith comes by hearing and hearing by the WORD`,
			reference: 'romans 10:17'
		},
		{
			verse: `God is not a man, that He should lie, Nor a son of man, that He should repent. Has He said, and will He not do? Or has He spoken, and will He not make it good?`,
			reference: 'numbers 23:19'
		},
		{
			verse: `There is nothing too hard for the Lord.`,
			reference: 'jeremiah 32:17'
		},
		{
			verse: `For I am the LORD. I speak, and the word which I speak will come to pass; it will no more be postponed`,
			reference: 'ezekial 12:25'
		},
		{
			verse: `For with God nothing is ever impossible and no word from God shall be without power or impossible of fulfillment.`,
			reference: 'luke 1:37'
		},
		{
			verse: `My covenant I will not break, Nor alter the word that has gone out of My lips.`,
			reference: 'psalms 89:34'
		},
		{
			verse: `God heard their groaning, and God remembered His covenant with Abraham, with Isaac, and with Jacob.`,
			reference: 'exodus 2:24'
		},
		{
			verse: `No weapon formed against you shall prosper, And every tongue which rises against you in judgment You shall condemn. This is the heritage of the servants of the LORD, And their righteousness is from Me, Says the LORD.
`,
			reference: 'isaiah 54:17'
		},
		{
			verse: `Greater is He that is in you than that is in the World`,
			reference: '1 john 4:4'
		},
		{
			verse: `Fear not, for I am with you; Be not dismayed, for I am your God. I will strengthen you, Yes, I will help you, I will uphold you with my righteous right hand.`,
			reference: 'isaiah 41:10'
		},
		{
			verse: `Do not fear or be discouraged.`,
			reference: 'deuternomy 1:21'
		},
		{
			verse: `The Lord said to him, Peace be with you; do not fear, you shall not die`,
			reference: 'judges 6:23'
		},
		{
			verse: `I, the Lord your God, will hold your right hand, Saying to you, ‘Fear not, I will help you.‘`,
			reference: 'isaiah 41:13'
		},
		{
			verse: `Do not fear, for you will not be ashamed; Neither be disgraced, for you will not be put to shame.`,
			reference: 'isaiah 54:4'
		},
		{
			verse: `If you diligently heed the voice of the LORD your God and do what is right in His sight, give ear to His commandments and keep all His statutes, I will put none of the diseases on you which I have brought on the Egyptians. For I am the LORD who heals you.`,
			reference: 'exodus 15:26'
		},
		{
			verse: `You shall serve the LORD your God, and I will bless your bread and your water. And I will take sickness away from the midst of you.`,
			reference: 'exodus 23:25'
		},
		{
			verse: `Behold, I will bring it health and healing; I will heal them and reveal to them the abundance of peace and truth.`,
			reference: 'jeremiah 33:6'
		},
		{
			verse: `This is but a light thing in the sight of the LORD: He will deliver.`,
			reference: '2 kings 3:18'
		},
		{
			verse: `You will not need to fight in this battle. Position yourselves, stand still and see the salvation of the LORD.`,
			reference: '2 chronicles 20:20'
		},
		{
			verse: `He sent His word and healed them, and delivered them from their destructions.`,
			reference: 'psalms 107:20'
		},
		{
			verse: `But to you who fear My name The Sun of Righteousness shall arise With healing in His wings;`,
			reference: 'malachi 4:2'
		},
		{
			verse: `I shall not die, but live, and declare the works of the LORD.`,
			reference: 'psalms 118:17'
		},
		{
			verse: `Call to Me, and I will answer you, and show you great and mighty things, which you do not know.
`,
			reference: 'jeremiah 33:3'
		},
		{
			verse: `Blessed is he who considers the poor; The Lord will deliver him in time of trouble.`,
			reference: 'psalms 41:1'
		},
		{
			verse: `God is our refuge and strength, a very present help in trouble.`,
			reference: 'psalms 46:1'
		},
		{
			verse: `They looked to Him and were radiant, and their faces were not ashamed.`,
			reference: 'psalms 34:5'
		},
		{
			verse: `Behold, I will do a new thing, now it shall spring forth; Shall you not know it? I will even make a road in the wilderness and rivers in the desert.`,
			reference: 'psalms 43:19'
		},
		{
			verse: `Because he has set his love upon me, therefore I will deliver him; I will set him on high, because he has known My name. He shall call upon me, and I will answer him; I will be with him in trouble; I will deliver him and honor him. With long life I will satisfy him, And show him My salvation.`,
			reference: 'psalms 91: 14-16'
		},
		{
			verse: `Fear not, for I have redeemed you; I have called you by your name; You are Mine.`,
			reference: 'isaiah 43:1'
		},
		{
			verse: `You will not need to fight in this battle. Position yourselves, stand still and see the salvation of the Lord, who is with you, O Judah and Jerusalem!’ Do not fear or be dismayed; tomorrow go out against them, for the Lord is with you.`,
			reference: '2 chronicles 20:17'
		},
		{
			verse: `Be strong and of good courage, do not fear nor be afraid of them; for the Lord your God, He is the One who goes with you. He will not leave you nor forsake you.`,
			reference: 'deuternomy 31:6'
		},
		{
			verse: `Do not let your heart faint, do not be afraid, and do not tremble or be terrified because of them.`,
			reference: 'deuternomy 20:3'
		},
		{
			verse: `The Lord does not delay and is not tardy or slow about what He promises, according to some people’s conception of slowness, but He is long-suffering (extraordinarily patient) toward you, not desiring that any should perish, but that all should turn to repentance.`,
			reference: '2 peter 3:9'
		},
		{
			verse: `Let us hold fast the confession of our hope without wavering, for He who promised is faithful.`,
			reference: 'hebrews 10:23'
		},
		{
			verse: `Jesus said to him, I am the Way and the Truth and the Life; no one comes to the Father except by (through) Me.`,
			reference: 'john 14: 6'
		},
		{
			verse: `God can do anything, you know—far more than you could ever imagine or guess or request in your wildest dreams! He does it not by pushing us around but by working within us, his Spirit deeply and gently within us (MSG).`,
			reference: 'ephesians 3:20'
		},
		{
			verse: `Do not fret or have any anxiety about anything, but in every circumstance and in everything, by prayer and petition (definite requests), with thanksgiving, continue to make your wants known to God. And God’s peace which transcends all understanding shall garrison and mount guard over your hearts and minds in Christ Jesus.`,
			reference: 'philippians 4: 6,7'
		},
		{
			verse: `I [You] can do all things through Christ who strengthens me [you].
`,
			reference: 'philippians 4:13'
		},
		{
			verse: `If you live in Me [abide vitally united to Me] and My words remain in you and continue to live in your hearts, ask whatever you will, and it shall be done for you.`,
			reference: 'john 15:7'
		},
		{
			verse: `Keep on asking and it will be given you; keep on seeking and you will find; keep on knocking [reverently] and [the door] will be opened to you”( AMP)`,
			reference: 'matthew 7:7'
		},
		{
			verse: `The Lord will perfect which concerns you`,
			reference: 'psalms 138: 8'
		},
		{
			verse: `Blessing and honor and glory and power be to Him who sits on the throne, And to the Lamb, forever and ever`,
			reference: 'revelations 5: 13'
		}
	];
</script>

<SEO
	title="AMI | Miraculous word"
	description="My dear friend, you may be longing like Job, “Oh, that I might have my request, that God would grant me the thing that I long for!”(Job 6:8). The answer is Lord Jesus Christ. May the following verses increase your faith and cause you to believe for the impossible to become possible and the incurable to become curable."
	url="/the-christ/miraculous-word"
></SEO>

<Hero title="Miraculous word" />

<section class="container-width mx-auto p-4 md:text-justify">
	<p class="drop-cap">
		My dear friend, you may be longing like Job, “Oh, that I might have my request, that God would
		grant me the thing that I long for!”(Job 6:8). The answer is Lord Jesus Christ. May the
		following verses increase your faith and cause you to believe for the impossible to become
		possible and the incurable to become curable.
	</p>
	<div class="flex flex-col gap-5">
		{#each verses as it, i (i)}
			<Blockquote quote={it.verse} cite={it.reference} dir={i % 2 == 0 ? 'left' : 'right'}
			></Blockquote>
		{/each}
	</div>
</section>
