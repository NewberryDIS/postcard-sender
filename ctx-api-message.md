Haha, this is difficult stuff to talk about!   Here's a pared-down version of the data, in JSON format because my brain processes JSON better:

{
    [...snip...],
    "APIResponse": {
        "CoreField.title": "Bicycling",
        "SystemIdentifier": "NL11L2E9",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKD58D",
        "MediaType": "Album",
        "Representative": {
            "CoreField.title": "",
            "MediaEncryptedIdentifier": "2KXJ8ZS66W7YG",
            "MediaType": "Image"
        },
        "Content": [{
            "CoreField.title": "Maxim fahrrader",
            "MediaEncryptedIdentifier": "2KXJ8ZPW7U47",
            "MediaType": "Album"
        }, {
            "CoreField.title": "Championnats du monde",
            "MediaEncryptedIdentifier": "2KXJ8ZPWMNU2",
            "MediaType": "Album"
        }, {
            "CoreField.title": "Cycles Bercley sur pneus englebert",
            "MediaEncryptedIdentifier": "2KXJ8ZPWMRYB",
            "MediaType": "Album"
        },
        [...snip...],
        ],
    }
}

So, in this case, we have 5 items of note: 

1. the parent item, the "package," the top level item, with `MediaEncryptedIdentifier` (mei) `2KXJ8ZSAKD58D`
2. the Representative, mei: `2KXJ8ZS66W7YG`
3. three `"Content"` items, meis: `2KXJ8ZPW7U47`, `2KXJ8ZPWMNU2`, `2KXJ8ZPWMRYB`

Item 1 is a compound object/album/virtual folder: `"MediaType": "Album"`.  I *cannot* turn an album into an image -- I need to get the *representative*.  But that's not available to the Content array.

To be more specific: in order to show a thumbnail/card for the "Bicycling" album, I want: 
- Title
    - to show the user what the album is called!
- Unique ID
    - I use the `MediaEncryptedIdentifier` as a unique id that can tie it back to Cortex
    - `MediaEncryptedIdentifier` is a useful field since it is also be used in the IIIF url structure: 
        - `https://collections.newberry.org/IIIF3/Image/[ MediaEncryptedIdentifier ]/full/max/0/default.jpg`
        - `https://collections.newberry.org/IIIF3/Image/2KXJ8ZYFS6A/full/max/0/default.jpg`
    - It is important to note here that the parent element, the package, the top level item, CANNOT be used in the IIIF url structure, since it is, in IIIF terms, a `Manifest`, not a `Canvas` -- in Cortex terms, it is an `Album`, not an `Image`
- A thumbnail image
    - This is the `Representative`.  A `Representative` is always an `Image`, so the field `Representative.MediaEncryptedIdentifier` is what I use for the thumbnail.  In the bicycles example, it goes like this:

    card: {
        title: ["APIResponse"]["CoreField.title"],
        uniqueID: ["APIResponse"]["MediaEncryptedIdentifier"],
        thumbnailID: ["APIResponse"]["Representative"]["MediaEncryptedIdentifier"]
    }

This is all fine.  This is how the page works at `https://digital.newberry.org/postcard-gallery/`.  

The problem is when we go from the page of all galleries into the pages for each gallery: `https://digital.newberry.org/postcard-gallery/bicycling/` (or `cats`, `dogs`, etc)

Each thumbnail on these pages is a postcard.  A postcard is, importantly, *an `album`, not an image.*  

To get the data for this page, I use a URL similar to the one you used in your example.  I'm using this one because it's more reduced, and the `MediaType` field is vital to the issue.

`https://collections.newberry.org/API/PackageExtractor/v1.0/Extract?package=2KXJ8ZSAKD58D&packagefields=CoreField.title,SystemIdentifier,MediaEncryptedIdentifier,MediaType&representativefields=CoreField.title,MediaEncryptedIdentifier,MediaType&contentfields=CoreField.title,MediaEncryptedIdentifier,CoreField.Representative-image,MediaType&format=json`

So, for the Bicycle thumbnails, I will iterate over the `Content` array.  These are postcards -- these are `Albums`, so I can't use their `MediaEncryptedIdentifier` in the IIIF url -- they are manifests, they return an error.  For example, here's the IIIF url for a thumbnail of the first item in the `content` array:

`https://collections.newberry.org/IIIF3/Image/2KXJ8ZPW7U47/full/300,/0/default.jpg`

To display a postcard's thumbnail, I need access to the *Content element's Representative.*  That's what I mean when I say that adding `DocumentRepresentative.MediaEncryptedIdentifier` to the API would help -- that's not a real field, but I based its name on the others like it: 

```
DocumentRepresentative.DocHeight
DocumentRepresentative.DocWidth
CoreField.Representative-image
```

(That last one really got my hopes up!  But it's empty, there's never any data in it.  This is, I think, why I was told at some point that the API was broken -- but I'm not sure.  It might be worth noting that there IS an ID field: `CoreField.Representative_DO` -- but that's not the `MediaEncryptedIdentifier`, so it just kicks the can down the road -- I still need to do another API call to get the `MediaEncryptedIdentifier` from the `CoreField.Representative_DO`.)

So, because I need the `Representative` of each `Content` element, I have to do ANOTHER api call, for each of the `Content` elements: 

```
https://collections.newberry.org/API/PackageExtractor/v1.0/Extract?package=2KXJ8ZPW7U47&representativefields=MediaEncryptedIdentifier&format=json
https://collections.newberry.org/API/PackageExtractor/v1.0/Extract?package=2KXJ8ZPWMNU2&representativefields=MediaEncryptedIdentifier&format=json
https://collections.newberry.org/API/PackageExtractor/v1.0/Extract?package=2KXJ8ZPWMRYB&representativefields=MediaEncryptedIdentifier&format=json
```

etc.

So, to display the Bicycle gallery, which has 31 items in it, I need to do 32 API calls: the first to get the Bicycle gallery data (`2KXJ8ZSAKD58D`), then another call for each postcard in the `Content` array.

The solution I'm recommending -- but you guys should do whatever's easiest, I don't know how it looks from your side -- is to add some type of `DocumentRepresentative.MediaEncryptedIdentifier` field: 

{
    [...snip...],
    "APIResponse": {
        "CoreField.title": "Bicycling",
        "SystemIdentifier": "NL11L2E9",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKD58D",
        "MediaType": "Album",
        "Representative": {
            "CoreField.title": "",
            "MediaEncryptedIdentifier": "2KXJ8ZS66W7YG",
            "MediaType": "Image",
        },
        "Content": [{
            "CoreField.title": "Maxim fahrrader",
            "MediaEncryptedIdentifier": "2KXJ8ZPW7U47",
            "MediaType": "Album"
            "DocumentRepresentative.MediaEncryptedIdentifier": "ABC123"
        }, {
            "CoreField.title": "Championnats du monde",
            "MediaEncryptedIdentifier": "2KXJ8ZPWMNU2",
            "MediaType": "Album"
            "DocumentRepresentative.MediaEncryptedIdentifier": "DEF456"
        }, {
            "CoreField.title": "Cycles Bercley sur pneus englebert",
            "MediaEncryptedIdentifier": "2KXJ8ZPWMRYB",
            "MediaType": "Album"
            "DocumentRepresentative.MediaEncryptedIdentifier": "GHI789"
        },
        [...snip...],
        ]
    }
}
