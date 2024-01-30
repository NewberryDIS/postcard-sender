import { createClient } from '@vercel/kv';
import { slugs } from '$lib';
import {
	KV_REST_API_URL,
	KV_REST_API_TOKEN,
	// CTX_API_TOKEN,
} from '$env/static/private';

// SET DEFAULT GALLERY
const defaultGallery = 'valentines-day'

export async function load({ params, request }) {
  console.log("referrer", request.referrer)
  const galleryDataClient = createClient({
    url: KV_REST_API_URL,
    token: KV_REST_API_TOKEN
  });

  let itemData, galleryData, id
  if (!params.id) {
    id ='2KXJ8ZSUOU6FW'
    // galleryData = await galleryDataClient.get(defaultGallery)
    // const randoMei  = galleryData.postcards[Math.floor(Math.random() * galleryData.postcards.length)].mei
    // itemData = await galleryDataClient.get(randoMei)
  } else {
    id  = params.id
  }
  itemData = await galleryDataClient.get(id)
  console.log(itemData)
  galleryData = await galleryDataClient.get(itemData.slug)

  return { itemData, galleryData }
}
