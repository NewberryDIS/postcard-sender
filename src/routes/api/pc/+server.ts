//
// import { createClient } from '@vercel/kv';
import { json } from '@sveltejs/kit';
// import { KV_REST_API_URL, KV_REST_API_TOKEN } from '$env/static/private';
//
// /** @type {import('./$types').RequestHandler} */
// export async function GET({ url }) {
// 	const galleryDataClient = createClient({
// 		url: KV_REST_API_URL,
// 		token: KV_REST_API_TOKEN
// 	});
//
// 	const slug = url.searchParams.get('slug');
// 	console.log(slug);
//
// 	let galleryData;
// 	if (slug) {
// 		galleryData = await galleryDataClient.get(slug);
// 	} else {
// 		galleryData = [];
// 	}
// 	return json(galleryData);
// }

import prisma from '$lib/prisma'

export async function GET({ url }) {
  const id = url.searchParams.get('id');
  console.log("api id", id)
  let galleryData = await prisma.gallery.findUnique({
    where: { slug: id }
  })
  const postcards = await prisma.postcard.findMany({
    where: { gallery: id }
  }) 
  // console.log("postcards", postcards)
  return json({ galleryData, postcards })
}
