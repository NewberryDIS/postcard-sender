import { writable } from 'svelte/store'
import galleries from '$lib/galleries.json'

export const defaultPostcard = "2KXJ8ZSUDXBP5"
// export const defaultPostcard = getDefaultPostcard()
export const activeGallery = writable('')
export const showImage = writable(false)

export function getDefaultPostcard() {
  const currentDate = new Date();
  // const testDate = new Date(2024, 4, 20)
  // const currentDate = testDate
  // now: Women's Rights https://digital.newberry.org/postcard-sender/2KXJ8ZPG8FKC/
  // March 11: St Pat's https://digital.newberry.org/postcard-sender/2KXJ8ZSUD5ZN7/
  // March 19: Easter https://digital.newberry.org/postcard-sender/2KXJ8ZSUDXBP5/
  const womensDay = [ "Women's Day" , "2KXJ8ZPG8FKC",  [ 2, 8 ] ]
  const stPats = [ "St. Patrick's Day", "2KXJ8ZSUD5ZN7",  [ 2, 17 ] ]
  const easter = [ "Easter", "2KXJ8ZSUDXBP5", [ 2, 31 ] ]

  const calendar = [womensDay, stPats, easter]

  for (var i=0; i < calendar.length; i++){  
    const holidate = new Date(currentDate.getFullYear(), calendar[i][2][0],calendar[i][2][1] )
    switch (true) {
      case currentDate <= holidate.setDate(holidate.getDate() + 1):
        console.log(calendar[i][0])
        return calendar[i][1];
      default:
        // cat + moon = default 
        return "2KXJ8ZSUFUJR0";
    } }

}

export const slugs = galleries.map(g => ([g.slug, g.title]))


// export const slugs = [["bicycling", "Bicycling"],
//   ["beer-and-wine", "Beer & Wine"],
//   ["chicago", "Chicago"],
//   ["dogs", "Dogs"],
//   ["reading-and-writing", "Reading and Writing"],
//   ["newberry", "Newberry"],
//   ["school-days", "School Days"],
//   ["cats", "Cats"],
//   ["coffee-tea", "Coffee and Tea"],
//   ["womens-rights", "Womens Rights"],
//   ["new-year", "New Year"],
//   ["valentines-day", "Valentine's Day"],
//   ["saint-patricks-day", "Saint Patricks Day"],
//   ["easter", "Easter"],
//   ["fourth-of-july", "Fourth of July"],
//   ["halloween", "Halloween"],
//   ["thanksgiving", "Thanksgiving"],
//   ["christmas", "Christmas"],
//   ["birthdays", "Birthdays"],
//   ["winter", "Winter"],
//   ["spring", "Spring"],
//   ["summer", "Summer"],
//   ["autumn", "Autumn"],
// ]

export function imgUrl(ctxMEI, size) {
  let iiifSize
  switch (size) {
    case 'large':
      iiifSize = 'full/,800'
      break;
    case 'thumb' && ctxMEI === '2KXJ8ZSAEHYME':
      iiifSize = '1277,650,450,450/300,';
      break;
    case 'thumb' && ctxMEI === '2KXJ8ZSATS8_C':
      iiifSize = 'square/300,'
      break;
    case 'thumb':
      iiifSize = 'full/300,'
      break;
    default:
      iiifSize = 'full/max'
      break;
  }
  return `https://collections.newberry.org/IIIF3/Image/${ctxMEI}/${iiifSize}/0/default.jpg`;
}
