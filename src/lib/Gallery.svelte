<script>
import { base  } from '$app/paths'
import { imgUrl, slugs } from '$lib'
export let data
import { MasonryGrid } from "@egjs/svelte-grid";
import Arrow from '$lib/icons/arrow.svelte'
const gap = 5;
const align = "center";
const defaultDirection = "end" 

let updatedData = data
async function getPostcards(s) {
    updatedData = await fetch(`${base}/api/pc?id=${s}`).then(r => r.json())
}
$: ({postcards, galleryData} = updatedData ) 
</script>
<header>
    <h1>Newberry Postcard Sender</h1>
    <p>Greet a friend with a vintage postcard image from the Newberry's digital collections</p>
</header>
<div class="more-label">
    <p><b>Send another!</b></p>
    <p>Select an image below, or choose a category from the drop-down menu</p>
</div>

<div class="dropdown">
    <div class="selected"><span>{galleryData.title}<Arrow /></span></div>
    <ul>
        {#each slugs as s}
            <li>
                <button class={s[0] === galleryData.slug ? 'active' : 'inactive' } on:click={() => getPostcards(s[0])}>
                    {s[1]}
                    {#if s[0] === galleryData.slug}
                        <Arrow rotate />
                    {/if}
                </button>
            </li>
        {/each}
    </ul>
</div>
<MasonryGrid
    { defaultDirection }
    id="images"
    class="container"
    useResizeObserver
    observeChildren
    {gap}
    {align}
>
    {#if postcards}
        {#each postcards as postcard}
            <a
                class={`tile ${postcard.pixel ? '' : ' image-tile'}`}
                href="{base}/{postcard.mei}"
                data-alt={postcard.title}
            >
                <img
                    src="{base}/images/{postcard.image}.webp"
                    onerror={ () => this.src=imgUrl(postcard.image, 'thumb') }
                    width="150"
                    class="thumb"
                    alt={postcard.title}
                />
            </a>
        {/each}
    {/if}
</MasonryGrid>
<style>
header {
    display: flex;
    flex-direction: column;
    justify-content: center;

}
header h1 {
    padding: 0;
    margin: 0;
    max-width: calc(100vw - 100px);
    font-size: clamp(2rem, 0.4321rem + 5.5749vw, 4rem);
    line-height: clamp(1.77rem, 0.4321rem + 5.5749vw, 3.5rem);
}
header p, .more-label p {
    padding: 0;
    margin: 0;
    font-size: clamp(0.87rem, 0.7413rem + 0.9199vw, 1.1rem);
}
.more-label, header {
    text-align: left;
    margin: 6px 13px;
}
.dropdown li {
    height: 0px;
    border: 0;
    transition-property: height;
    transition-duration: 300ms;
}
.dropdown :is(li, button, .selected){
    width: 100%;
}
.dropdown button, .selected {
    position: relative;
    font-family: 'styrene';
    font-size: 0.87rem;
    cursor: pointer;
    color: rgb(var(--fg-color-1));
    display: flex;
    justify-content: space-between;
    align-items: center;

    border: 1px solid rgb(var(--bg-color-2));

    position: relative;
    z-index: 1; /* matters! */
    width: 90%;
    margin: 0 auto;
    overflow: hidden;
}
.inactive::before {
    background: linear-gradient(to right,  rgb(var(--bg-color-2)) 0%, rgb(var(--bg-color-2)) 50%,rgb(var(--bg-color-1)) 50%, rgb(var(--bg-color-1)) 100%);
}
.active::before {
    background: linear-gradient(to right,  rgb(var(--bg-color-1)) 0%, rgb(var(--bg-color-1)) 50%,rgb(var(--bg-color-2)) 50%, rgb(var(--bg-color-2)) 100%);
    /* background: linear-gradient(to right,  rgb(var(--bg-color-2)) 0%, rgb(var(--bg-color-2)) 50%,rgb(var(--bg-color-1)) 50%, rgb(var(--bg-color-1)) 100%); */
}

:is(.active, .inactive, .selected)::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    transition: transform 0.4s;
    z-index: -1;
    transform: translateX(-50%);
}
.inactive:hover::before,
.inactive:focus::before  {
    transform: translateX(0);
}
.active:hover::before,
.active:focus::before  {
    transform: translateX(0);
}
.active {
    background: linear-gradient(to right, 
        rgba(var(--bg-color-1)) 0%,
        rgba(var(--bg-color-2)) 50%,
        rgba(var(--bg-color-2)) 100% );
    transition: 300ms;
}
.active:hover  {
    background: linear-gradient(to right, 

        rgba(var(--bg-color-1)) 0%,
        rgba(var(--bg-color-1)) 50%,
        rgba(var(--bg-color-2)) 100% );
}
.dropdown:hover li{
    height: 22px;
}
.selected {
    background: rgb(var(--bg-color-1));
    border: 1px solid rgb(var(--bg-color-1));
}
.selected  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    z-index: 1;
    height: 22px;
    margin: 1px 2px 1px 2px;
    padding: 0 4px;
    border: 1px solid rgb(var(--bg-color-2));

}
.dropdown:hover ul {
    pointer-events: auto;
    opacity: 0.99;
}
.dropdown ul {

    pointer-events: none;
    background: rgb(var(--bg-color-1));
    transition-property: opacity;
    transition-duration: 150ms;
    transition-delay: 100ms;
    opacity: 0.01;
    border: 0;
    position: absolute;
    top: 25px;
    list-style-type: none;
    box-sizing: border-box;
    width: 100%;
    /* z-index: 2; */
    padding: 3px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 3px;
}
.dropdown :is(ul, li) {

    margin: 0;
}
.dropdown {
    width: calc(100% - 22px);
    margin: 0 11px 11px 11px;
    z-index: 9001;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 3px;
}
</style>
