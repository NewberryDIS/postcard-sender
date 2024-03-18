import prisma from '$lib/prisma'

const defaultGallery = 'valentines-day'

export async function load({ params }) {
  const id = params.id || '2KXJ8ZSRY0U_H'
  const itemData = await prisma.postcard.findFirst({
    where: { mei: id }
  })
  let galleryData = await prisma.gallery.findUnique({
    where: { slug: itemData.gallery }
  })
  const postcards = await prisma.postcard.findMany({
    where: { gallery: itemData.gallery }
  }) 
  // console.log("postcards", postcards)
  return { itemData, galleryData, postcards }
}
