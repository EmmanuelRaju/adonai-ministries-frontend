import { PUBLIC_BASE_URL } from '$env/static/public';
import { navlinks } from '$lib/data/navbar';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = () => {
	const baseUrl = PUBLIC_BASE_URL;

	const pages = navlinks.flatMap((link) => {
		if (link.href) {
			return [link.href];
		} else if (link.children) {
			return link.children.flatMap((child) => {
				if (child.href) {
					return [child.href];
				}
				return [];
			});
		}
		return [];
	});

	const urls = pages
		.map(
			(path) =>
				`<url><loc>${baseUrl}${path}</loc><lastmod>${new Date().toISOString()}</lastmod></url>`
		)
		.join('');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	${urls}
	</urlset>`;

	return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
