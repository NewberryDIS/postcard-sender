<script>
import '$css/newberry.css'
import '$css/mq.css'

  import { afterNavigate, beforeNavigate } from '$app/navigation'
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
  if($showImage) {

  console.log("loading image")
  }
})

</script>

<main>
  <div class="content">
    <header>
      <h1>Newberry Postcard Sender</h1>
      <p>Greet a friend with a vintage postcard image from the Newberry's collection</p>
    </header>
    <section class="image-section">
      <div class="asdf">
        <div class="bg-img">
         <svg 
            version="1.1"
            id="svg1"
            width="200"
            height="200"
            viewBox="0 0 200 200"
          >
            <defs
              id="defs1"></defs>
            <g
              id="g1"
              transform="matrix(0.37052935,0,0,0.38527681,0.01635167,-4.1967113)">
              <path
                d="m 310,445 v -85 h 93.5 93.5 v 48.4805 48.4805 l 21.36209,0.2695 21.36208,0.2695 -39.61208,36.23269 -39.61209,36.2327 -75.25,0.0173 L 310,530 Z"
                id="path7" />
              <path
                d="m 310,270 v -90 h 93.5 93.5 v 90 90 H 403.5 310 Z"
                id="path6" />
              <path
                d="m 310,152.66459 v -27.33542 l -0.66136,-53.979524 -0.66135,-53.979529 5.26355,-3.2387 5.26356,-3.238701 1.23194,0.303642 L 321.66828,11.5 409.33414,68.46517 497,125.43034 V 152.71517 180 H 403.5 310 Z"
                id="path5" />
              <path
                d="M 189.22589,107.0296 189.5,89.826714 l 59,-35.892962 59,-35.892963 0.64411,8.729606 0.64412,8.729605 0.10588,44.218615 0.10589,44.218615 -1.75,-0.64936 -1.75,-0.64936 -28.30334,-17.2725 -28.30333,-17.272505 -28.69667,17.574015 -28.69666,17.57402 -1.27411,0.49547 -1.27412,0.49547 z"
                id="path4" />
              <path
                d="M 0.22793472,161.32821 0.5,142.65642 94,89.804695 187.5,36.952966 188.11856,67.726483 188.73712,98.5 l 0.13102,40.75 0.13103,40.75 H 94.477518 -0.04413057 Z"
                id="path3" />
              <path
                d="M 0,270 V 180 H 94.5 189 v 90 90 H 94.5 0 Z"
                id="path2" />
              <path
                d="M 0,445 V 360 H 94.5 189 v 85 85 H 94.5 0 Z"
                id="path1" />
            </g>
          </svg>
        </div>
        {#if $showImage}
        <img src="{imgUrl(featuredPostcard.image, 'large')}" class="featured-image" alt=""/>
        {/if}
      </div>
        {#if $showImage}
      <p class="caption">
        {featuredPostcard.imageTitle}
      </p>
        {/if}
    </section>
    <section class="button-section">
      <ShareButtons />
    </section>
    <dark-mode-toggle></dark-mode-toggle>
    <!-- <img src="{base}/webp/{data.itemData.image}.webp" alt="" /> -->
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
  </div>
</main>

<style>
.bg-img {
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.image-section {
  flex: 1;
  justify-content: center;
}
.asdf {
  position: relative;
  max-height: calc(95% - 60px);
  max-width: 90%;
  width: 90%;
  display: flex;
  display: inline;
  justify-content:center;
  align-items:center;
}
header h1 {
  padding: 0;
  max-width: calc(100vw - 100px);
  font-size: clamp(2rem, 0.4321rem + 5.5749vw, 4rem);
  line-height: clamp(1.77rem, 0.4321rem + 5.5749vw, 3.5rem);
}
header p, .more-label p {
  padding: 0;
  font-size: clamp(0.87rem, 0.7413rem + 0.9199vw, 1.1rem);
}
.gallery :is(h1, p){
  text-align: left;
  margin: 3px 13px;
}
.logo-wrapper {
  position: absolute;
  top: 11px;
  left: 11px;
  z-index: 9001;
}
.content :is(h1, p) {
  margin: 0;
  text-align: center;
}
h1 {
  max-width: calc(100vw - 100px);
  font-size: clamp(2rem, 0.4321rem + 5.5749vw, 4rem);
}
p {
  font-size: clamp(1rem, 0.7413rem + 0.9199vw, 1.33rem);
}
main {
  display: flex;
  gap: 11px;

}
.featured-image{
  position: relative;
  z-index: 1;
  /* display: flex; */
  height: 100%;
  width: 100%;
  object-fit: contain;
  max-height: 100%;
}
.caption {
  margin: 11px;
}
.content {
  position: relative;
  flex: 1;
  min-width: 0;
  min-height: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 11px;

}
section {
  display: flex;
}
section, header {
  min-width: 0;
  min-height: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
section :is(img, p) {
  min-width: 0;
  min-height: 0;
} 
section {
  text-align: center;
  /* max-width: 90%; */
}
section p {
  padding: 0;
  margin: 0;
}

.asdf {
  min-height: min(50vw, 200px);
}
 svg {
  max-height: min(50vw, 200px);
}
path {
  fill: rgb(var(--fg-color-1, 33, 33, 37));
}

@keyframes fader {
0% {
  opacity: 0.83;
}

33% {
  opacity: 0.33;
}

66% {
  opacity: 0.83;
}

100% {
  opacity: 0.83;
}
}
.asdf {
  --duration: 2s;
  --interval: 0.25;
  /* note that 7 * 0.25 !== 2; */
  /* 8th element is the non-existent `path` between 7 and 1,  */
  /* the negative space at the bottom of the n */
}
#path7 {
  animation: fader var(--duration) calc(var(--interval) * 7s) ease-in infinite;
}
#path6 {
  animation: fader var(--duration) calc(var(--interval) * 6s) ease-in infinite;
}
#path5 {
  animation: fader var(--duration) calc(var(--interval) * 5s) ease-in infinite;
}
#path4 {
  animation: fader var(--duration) calc(var(--interval) * 4s) ease-in infinite;
}
#path3 {
  animation: fader var(--duration) calc(var(--interval) * 3s) ease-in infinite;
}
#path2 {
  animation: fader var(--duration) calc(var(--interval) * 2s) ease-in infinite;
}
#path1 {
  animation: fader var(--duration) calc(var(--interval) * 1s) ease-in infinite;
}
</style>
