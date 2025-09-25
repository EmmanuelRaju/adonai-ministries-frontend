<script>
	import { Hero } from '$lib/components';

	const statements = [
		'We believe the Bible (All scriptures) is eternal (Mark 13:31) and is given to mankind by the inspiration of the Sovereign Lord (II Tim 3:16) who cannot lie (Titus1:2) and the Bible convinces men of truth and leads to live a holy life (I Pet 1: 15,16) and is able to make one wise unto salvation through faith in Christ Jesus (II Tim 3: 15).',
		'We believe in God the Father (I Cor 8:6), God the Son (Heb 1:8) and God the Holy Ghost (Acts 5:3,4) are one in perfect unity (I John 5:7, Deut 6:4). The Father is Head of Christ (I Cor 11:3), the Son is only begotten of the Father (2 John 3) and the Holy Ghost proceeds from both the Father and the Son (John 16:7-15) and God existed before anything (Isa 43:10-11,13).',
		'We believe God created all things by Jesus Christ (Col 1: 16, Eph 3:9) and God created man in His own image (Gen 1:26,27).',
		'We believe Lord Jesus Christ is the only way of Salvation. Since God so loved the world, He has sent His only son Lord Jesus Christ to be an atonement and whosoever believeth in Him shall be Saved and have eternal life (John 3:16, Rom 10:9-13). We also believe physical healing is part of the redemptive work of Christ. (Isa 53:4-5, I Pet 2:24, Mt 8:17).',
		'We believe after we accept the Lord Jesus Christ as Savior, we give a testimony to the world by water immersion baptism, that we are buried with Him unto death and will walk in newness of life, as Jesus Christ was raised from the dead (Rom 6:4-5, Matt 28:19).',
		'We believe that Holy Spirit baptism is commanded by Lord Jesus Christ, is for every believer (John 7:37-39,Luke 24: 49, Acts 1: 4-8) and He died on the cross so everyone might have it (Gal 3:13-14).',
		'We Believe as the Bible declares in I Cor 12: 4-11, Gifts are by God the Holy Spirit. Administrations are by Lord Jesus Christ. Operations are by God the Father. Each person is given the particular manifestation of the Spirit, as He wills, for the common good.',
		"We believe in Lord's supper as commanded by the Lord to remember His death until He returns (I Cor 11: 24-26).",
		'We believe in the Church as the body of Christ (Eph 1: 22-23) and fellowship of believers (Acts 2:42).',
		'We believe in the resurrection of all men as Christ rose from the dead (I Cor 15: 20-22, 51-57).',
		'We believe in the rapture of the church when Christ comes for the saints (I Thes 4:13-18) and second coming of the Lord when Christ comes with the saints (Matt 25: 31-46) in power and great glory (Matt 24: 29-31) to execute judgment upon all who are ungodly (Jude 14-15).',
		'We believe in new heavens and a new earth which is prepared for the righteous (II Pet 3:13, Isa 65:17, Isa 66:22-23, Rev 21:22-23)'
	];
</script>

<Hero title="Statement of faith" />

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
