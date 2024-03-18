<script>

  import '$css/newberry.css'
  import '$css/style.css'
  import '$css/mq.css'

  import allPostcards from '$lib/postcards.json'
  import allGalleries from '$lib/galleries.json'
  import { onMount } from 'svelte'
  import { page } from '$app/stores'
  import { base } from '$app/paths'
  import { defaultPostcard, imgUrl, activeGallery, showImage } from '$lib'
  import Gallery from '$comps/Gallery.svelte'
  import ImageHolder from '$comps/ImageHolder.svelte'
  import Dropdown from '$comps/Dropdown.svelte'
  import ShareButtons from '$comps/ShareButtons.svelte'

  $: id = $page.params.id || defaultPostcard 
  $: featuredPostcard = allPostcards.filter(f => f.mei === id || f.image === id).pop() || {
    "gallery": "cats",
    "title": "Cats",
    "slug": "cats",
    "mei": "2KXJ8ZSAKDD11",
    "context": "Vintage cat postcards",
    "image": "2KXJ8ZEQRXQP",
    "imageTitle": "Stripes to the front",
    "width": "2542",
    "height": "3893"
  }
  $: $activeGallery = featuredPostcard.gallery
  $: postcards = allPostcards.filter(f => f.gallery === $activeGallery)
  $: currentGallery = allGalleries.filter(f => f.slug === $activeGallery).pop()

  function getWidth(postcard){
    return Math.round(postcard.width / postcard.height * 800);
  }

  onMount (() => {
    $showImage = true
  })
</script>

<main>
  <div class="content">
    <header>
      <h1>Newberry Postcard Sender</h1>
      <p>Greet a friend with a vintage postcard image from Newberry Digital Collections</p>
    </header>
    <section>
      {#if $showImage}
          <ImageHolder src="{imgUrl(featuredPostcard.image, 'large')}" alt="" width={getWidth(featuredPostcard)} />
        <p class="caption">
          {featuredPostcard.imageTitle}
        </p>
      {/if}
    </section>
    <section>
      <div class="sharethis-inline-share-buttons"></div>
      <ShareButtons image={featuredPostcard.image} />
    </section>
  </div>
  <div class="gallery">

    <header>
      <h1>Newberry Postcard Sender</h1>
      <p>Greet a friend with a vintage postcard image from Newberry Digital Collections</p>
    </header>
    <div class="more-label">
      <p><b>Send another!</b></p>
      <p>Select an image below, or choose a category from the drop-down menu</p>
    </div>
    <Dropdown galleryData={ currentGallery } />
    <Gallery { postcards } />
  <div class="hidelinkwrapper">
    {#each allPostcards as p}
      <a class="hidelinks" href="{base}/{p.mei}">.</a>
    {/each}
        </div>
  </div>
</main>
<style>
.hidelinks {
  font-size: 0.3rem;
  color: rgba(0,0,0,0);
  visibility: hidden;

}
.hidelinks:hover, 
.hidelinks:active, 
.hidelinks:focus, 
.hidelinks:inactive {

}
.hidelinkwrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>
