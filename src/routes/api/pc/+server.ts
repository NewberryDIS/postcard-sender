
import { createClient } from '@vercel/kv';
import { json } from '@sveltejs/kit';
import { KV_REST_API_URL, KV_REST_API_TOKEN } from '$env/static/private';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const galleryDataClient = createClient({
		url: KV_REST_API_URL,
		token: KV_REST_API_TOKEN
	});

	const slug = url.searchParams.get('slug');
	console.log(slug);

	let galleryData;
	if (slug) {
		galleryData = await galleryDataClient.get(slug);
	} else {
		galleryData = [];
	}
	return json(galleryData);
}
