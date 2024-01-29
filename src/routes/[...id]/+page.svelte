<script lang="ts">

  export let data
  // console.log(data)
  import {base} from '$app/paths'
  import { imgUrl } from '$lib'
 import NewberryDCLogo from "$lib/NewberryDCLogo.svelte" 
 import Gallery from "$lib/Gallery.svelte" 
 import ShareButtons from "$lib/ShareButtons.svelte" 
</script>
<main>
  <div class="content">
    <NewberryDCLogo />
    <header>
      <h1>Newberry Postcard Sender</h1>
      <p>Greet a friend with a cintage postcard image from the Newberry's collection</p>
    </header>
      <section>
    <img src="{imgUrl(data.itemData.image, 'large')}" alt="" height="800"/>
      <p class="caption">
        {data.itemData.imageTitle}
      </p>
    </section>
      <ShareButtons />
    <!-- <img src="{base}/webp/{data.itemData.image}.webp" alt="" /> -->
  </div>
  <div class="gallery">
    <Gallery galleryData={ data.galleryData } />
  </div>
</main>

<style>
  main {
    display: flex;
    padding: 11px;
    gap: 11px;
    justify-content: space-between;

  }
  .content {
    flex: 3;
  }
  .gallery {
    flex: 1;
  }
:global(body){
  background: #333 !important;
  color: #ccc !important;
}

</style>
