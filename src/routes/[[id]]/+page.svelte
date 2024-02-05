<script lang="ts">
  import allPostcards from '$lib/postcards.json'
  import allGalleries from '$lib/galleries.json'
  import { page } from '$app/stores'
  import { imgUrl, activeGallery } from '$lib'
  import Gallery from '$comps/Gallery.svelte'
  import Dropdown from '$comps/Dropdown.svelte'
  import ShareButtons from '$comps/ShareButtons.svelte'
  
  let printableData = ""
  $: id = $page.params.id ||  "2KXJ8ZSRY0U_H"
  // printableData = postcards
  $: featuredPostcard = allPostcards.filter(f => f.mei === id || f.image === id).pop() || {
    "gallery": "valentines-day",
    "title": "Valentine greetings",
    "mei": "2KXJ8ZSRY0U_H",
    "image": "2KXJ8ZSS7IHVQ",
    "imageTitle": "Valentine greetings",
    "width": "2790",
    "height": "4295"
  }
  $: $activeGallery = featuredPostcard.gallery
  $: postcards = allPostcards.filter(f => f.gallery === $activeGallery)
  $: printableData = allPostcards.filter(f => {
    if ( f.mei === id ){
    console.log("f.mei",f.mei)
      return true
    }
    return f.mei === id
  })
  $: currentGallery = allGalleries.filter(f => f.slug === $activeGallery).pop()
  $: console.log("printableData",printableData)
  $: console.log("featuredPostcard",featuredPostcard)
  $: console.log("$activeGallery",$activeGallery)
  $: console.log("postcards",postcards)
  $: console.log("currentGallery",currentGallery)
</script>

<main>
    <div class="content">
        <section>
            <img src="{imgUrl(featuredPostcard.image, 'large')}" class="featured-image" alt=""/>
            <p class="caption">
                {featuredPostcard.imageTitle}
            </p>
        </section>
        <section>
            <ShareButtons />
        </section>
        <dark-mode-toggle></dark-mode-toggle>
    </div>
    <div class="gallery">
      
<header>
    <h1>Newberry Postcard Sender</h1>
    <p>Greet a friend with a vintage postcard image from the Newberry's digital collections</p>
</header>
<div class="more-label">
    <p><b>Send another!</b></p>
    <p>Select an image below, or choose a category from the drop-down menu</p>
</div>
  <Dropdown galleryData={ currentGallery } />
  <Gallery { postcards } />
    </div>
</main>
    <pre>{JSON.stringify(printableData, null, 2)}</pre>

