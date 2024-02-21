import { writable } from 'svelte/store'

export const defaultPostcard = '2KXJ8ZSUD5ZN7'
export const activeGallery = writable('')
export const showImage = writable(false)

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
