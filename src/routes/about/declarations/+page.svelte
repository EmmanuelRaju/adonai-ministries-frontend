<script>
	import { Hero, SEO } from '$lib/components';
	import declaration from '$lib/assets/images/declaration.jpg?enhanced';

	const statements = [
		'With God nothing is ever impossible and no word from God shall be without power or impossible of fulfillment. (Luke 1:37)',
		'God gave His beloved son Lord Jesus Christ, the risen Savior for me. God loves me and I love HIM. (John 3:16, Matt 28:6, I John 4:19)',
		'No weapon formed against me shall prosper. (Isa 54:17)',
		'God, who is in me, is greater than he who is in the world. (I John 4:4)',
		'Because God is for me, who can be against me? (Rom 8:31)',
		'No harm will come to me, and no plague shall come near my dwelling. (Psa 91:10)',
		'Gates of hell will not prevail against me. (Matt 16:18)',
		'The Lord will make me the head and not the tail and I will be above only, and I will not be beneath. (Deut 28:13)',
		'Our God will fight for me, and I will serve you, my Lord. (Deut 3:22, Josh 24:15)',
		'In righteousness I will be established, I will be far from oppression, for I will not fear; and from terror, for it will not come near me. (Isa 54:14)',
		'I will be prosperous in all things and be in health in the name of Jesus. (III John 2)',
		'All my children will be taught by the LORD, and great will be the peace of my children. (Isa 54:13)',
		'All the glory, honor, majesty, power, blessing, strength, wisdom and riches be to our God the Father, to our Lord Jesus Christ and to our God the Holy Spirit forever. Amen. (Rev 5:12,13)'
	];
</script>

<SEO
	title="AMI | Declarations"
	description="Adonai Ministries International - Declarations"
	url="/about/statement-of-faith"
></SEO>

<Hero title="Declarations" img={declaration} />

<section class="container-width mx-auto p-4 pt-8 md:text-justify">
	<ol class="statement-of-faith">
		{#each statements as statement, i (i)}
			<li class="relative pb-10 pl-5 lg:pl-10">{statement}</li>
		{/each}
	</ol>
</section>

<style>
	.statement-of-faith {
		counter-reset: statement;
		list-style: none;
	}

	.statement-of-faith li {
		counter-increment: statement;
	}

	.statement-of-faith li::before {
		content: counter(statement, decimal-leading-zero);
		position: absolute;
		left: -2.5rem;
		top: 0;
		font-size: 2.5rem;
		font-weight: bold;
		line-height: 1;
		opacity: 0.5;
	}
</style>
