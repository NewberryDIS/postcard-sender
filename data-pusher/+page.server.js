import data from "./_all_galleries.json";
import { createClient } from "@vercel/kv";
import {
  KV_REST_API_URL,
  KV_REST_API_TOKEN,
  // CTX_API_TOKEN,
} from "$env/static/private";

export async function load() {
  const galleryDataClient = createClient({
    url: KV_REST_API_URL,
    token: KV_REST_API_TOKEN,
  });
  let message;
  try {
    await Promise.all(
      data.map(async (gallery) => {
        await Promise.all(
          gallery.postcards.map(async (postcard) => {
            await galleryDataClient.set(postcard.mei, postcard);
          }),
        );
        await galleryDataClient.set(gallery.slug, gallery);
      }),
    );
    message = "Success!";
  } catch (error) {
    message = JSON.stringify(error, null, 2);
  }
  return { message };
}
