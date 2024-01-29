import { createClient } from '@vercel/kv';
import { slugs } from '$lib';
import {
	KV_REST_API_URL,
	KV_REST_API_TOKEN,
	// CTX_API_TOKEN,
} from '$env/static/private';

// SET DEFAULT GALLERY
const defaultGallery = 'valentines-day'

export async function load({ params }) {
  const galleryDataClient = createClient({
    url: KV_REST_API_URL,
    token: KV_REST_API_TOKEN
  });

  let itemData, galleryData
  if (!params.id) {
    galleryData = await galleryDataClient.get(defaultGallery)
    const randoMei  = galleryData.postcards[Math.floor(Math.random() * galleryData.postcards.length)].mei
    itemData = await galleryDataClient.get(randoMei)
  } else {
  const { id } = params
    itemData = await galleryDataClient.get(id)
    console.log(itemData)
    galleryData = await galleryDataClient.get(itemData.slug)

}
return { itemData, galleryData }
}
