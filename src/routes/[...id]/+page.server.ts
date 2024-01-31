import prisma from '$lib/prisma'

const defaultGallery = 'valentines-day'

export async function load({ params }) {
  const id = params.id || '2KXJ8ZSUOU6FW'
  const itemData = await prisma.postcard.findUnique({
    where: { mei: id }
  })
  console.log(itemData.gallery)
  let galleryData = await prisma.gallery.findMany({
    where: { slug: itemData.gallery }
  })
  const postcards = await prisma.postcard.findMany({
    where: { gallery: itemData.gallery }
  }) 
  const alpca = await prisma.postcard.findMany()
  // console.log("postcards", postcards)
  // galleryData.postcards = postcards
  // console.log("gd.postcards", galleryData.postcards)
  return { itemData, galleryData, postcards, alpca }
}
// import { createClient } from '@vercel/kv';
// import { slugs } from '$lib';
// import {
// 	KV_REST_API_URL,
// 	KV_REST_API_TOKEN,
// 	// CTX_API_TOKEN,
// } from '$env/static/private';
//
// // SET DEFAULT GALLERY
// const defaultGallery = 'valentines-day'
//
// export async function load({ params, request }) {
//   const galleryDataClient = createClient({
//     url: KV_REST_API_URL,
//     token: KV_REST_API_TOKEN
//   });
//
//   let itemData, galleryData, id
//   if (!params.id) {
//     id ='2KXJ8ZSUOU6FW'
//     // galleryData = await galleryDataClient.get(defaultGallery)
//     // const randoMei  = galleryData.postcards[Math.floor(Math.random() * galleryData.postcards.length)].mei
//     // itemData = await galleryDataClient.get(randoMei)
//   } else {
//     id  = params.id
//   }
//   // itemData = await galleryDataClient.get(id)
//   console.log(itemData.gallery)
//   // galleryData = await galleryDataClient.get(itemData.gallery)
//   console.log(galleryData)
//
//   return { itemData, galleryData }
// }
