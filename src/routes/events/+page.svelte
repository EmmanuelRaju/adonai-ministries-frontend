<script>
	import { Hero } from '$lib/components';

	const statements = [
		'Love of the Compassionate Father',
		'Word of the Living God',
		'Presence of the Almighty God',
		'Power of the Most High God',
		'Glory of the Merciful God',
		'Goodness of the Gracious Lord'
	];
</script>

<Hero title="Events" />

<section class="container-width mx-auto p-4 pt-8 md:text-justify">
	<p class="drop-cap">
		The Glorious Gospel is the power of God unto Salvation (Rom 1:16). The Gospel comes unto you not
		only in word, but also in power, and in the Holy Ghost, and in much assurance (I Thes 1:5)
		because our Lord Jesus Christ is the same yesterday, today and forever (Heb 13:8).
	</p>
	<p>
		At every “Adonai’s gathering”, Bro. Selva Manuel will deliver the anointed message of God the
		Holy Spirit and pray for those who need God’s healing and deliverance. All are welcome. God will
		graciously meet with you at the point of your need and Glorify His name.
	</p>
	<p>Come to the presence of God and experience:</p>
	<ul class="">
		{#each statements as statement, i (i)}
			<li class="">{statement}</li>
		{/each}
	</ul>
	<p>Our loving God Saves, Heals, Delivers, Sanctifies, Resurrects, Restores and Edifies</p>
</section>
