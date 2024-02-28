import { writable } from 'svelte/store'

export const defaultPostcard = getDefaultPostcard()
export const activeGallery = writable('')
export const showImage = writable(false)

export function getDefaultPostcard() {
  const currentDate = new Date();
  // const testDate = new Date(2024, 4, 20)
  // const currentDate = testDate
  // now: Women's Rights https://digital.newberry.org/postcard-sender/2KXJ8ZPG8FKC/
  // March 11: St Pat's https://digital.newberry.org/postcard-sender/2KXJ8ZSUD5ZN7/
  // March 19: Easter https://digital.newberry.org/postcard-sender/2KXJ8ZSUDXBP5/
  const womensDay = new Date(currentDate.getFullYear(), 2, 8);
  const stPats = new Date(currentDate.getFullYear(), 2, 17);
  const easter = new Date(currentDate.getFullYear(), 3, 1);

  const calendar = [womensDay, stPats, easter]

  switch (true) {
    case currentDate <= calendar[0]:
      console.log("// Women's Day")
      return "2KXJ8ZPG8FKC";
    case currentDate <= calendar[1]:
      console.log( "// St. Patrick's Day" )
      return "2KXJ8ZSUD5ZN7";
    case currentDate <= calendar[2] :
      console.log( "// Easter" )
      return "2KXJ8ZSUDXBP5";
    default:
      // cat + moon = default 
      return "2KXJ8ZSUFUJR0";
  }

}


export const slugs = [["bicycling", "Bicycling"],
  ["chicago", "Chicago"],
  ["dogs", "Dogs"],
  ["alcohol", "Alcohol"],
  ["reading-and-writing", "Reading and Writing"],
  ["newberry", "Newberry"],
  ["school-days", "School Days"],
  ["cats", "Cats"],
  ["coffee-tea", "Coffee and Tea"],
  ["womens-rights", "Womens Rights"],
  ["new-year", "New Year"],
  ["valentines-day", "Valentine's Day"],
  ["saint-patricks-day", "Saint Patricks Day"],
  ["easter", "Easter"],
  ["fourth-of-july", "Fourth of July"],
  ["halloween", "Halloween"],
  ["thanksgiving", "Thanksgiving"],
  ["christmas", "Christmas"],
  ["birthdays", "Birthdays"],
  ["winter", "Winter"],
  ["spring", "Spring"],
  ["summer", "Summer"],
  ["autumn", "Autumn"],
]

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
