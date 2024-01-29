<script>
    import { base  } from '$app/paths'
    import { imgUrl, slugs } from '$lib'
    export let galleryData, postcards
    import { MasonryGrid } from "@egjs/svelte-grid";
    import Arrow from '$lib/icons/arrow.svelte'
    const gap = 5;
    const align = "center";
    const defaultDirection = "end" 


    // $: console.log(postcards)
    async function getPostcards(s) {
        galleryData = await fetch(`${base}/api/pc?slug=${s}`).then(r => r.json())
    }
    $: postcards = galleryData.postcards
</script>
<div class="dropdown">
    <button class="selected"><span>{galleryData.title}</span><Arrow /></button>
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
<div class="gallery">
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
                    href="{base}/{postcard.repImage}"
                    data-alt={postcard.title}
                >
                    <img
                        src="{base}/webp/{postcard.repImage}.webp"
                        onerror={ () => this.src=imgUrl(postcard.repImage, 'thumb') }
                        width="200"
                        class="thumb no-share"
                        alt={postcard.title}
                    />
                </a>
            {/each}
        {/if}
    </MasonryGrid>
</div>
<style>
    .dropdown li {
        height: 0px;
        /* height: 22px; */

        transition-property: height;
        transition-duration: 300ms;
    }
    .dropdown :is(li, button){
        box-sizing: border-box;
        width: 100%;
    }
    .dropdown button {
        position: relative;
        font-family: 'styrene';
        font-size: 0.87rem;
        cursor: pointer;
        color: rgb(var(--fg-color-1));
        display: flex;
        justify-content: space-between;
        align-items: center;

        border: 1px solid rgb(var(--bg-color-2));

    }
    .dropdown button {
        position: relative;
        z-index: 1; /* matters! */
        width: 100%;
        overflow: hidden;
    }
    .dropdown button:not(.selected, .active)::before {
        transform: translateX(-50%);
    }
    /* .dropdown button:is(.selected, .active)::before { */
    /*     background: linear-gradient(to right,  rgb(var(--bg-color-1)) 0%, rgb(var(--bg-color-1)) 50%,rgb(var(--bg-color-2)) 50%, rgb(var(--bg-color-2)) 100%); */ 
    /*     background: linear-gradient(to right,  rgb(var(--bg-color-2)) 0%, rgb(var(--bg-color-2)) 50%,rgb(var(--bg-color-1)) 50%, rgb(var(--bg-color-1)) 100%); */
    /* } */

    .dropdown button::before {
        background: linear-gradient(to right,  rgb(var(--bg-color-2)) 0%, rgb(var(--bg-color-2)) 50%,rgb(var(--bg-color-1)) 50%, rgb(var(--bg-color-1)) 100%);
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 200%;
        height: 100%;
        transition: transform 0.4s;
        z-index: -1;
    }
    .dropdown ul button:not(.selected, .active):hover::before,
    .dropdown ul button:not(.selected, .active):focus::before  {
        transform: translateX(0);
    }
    .dropdown ul button:is(.selected, .active):hover::before,
    .dropdown ul button:is(.selected, .active):focus::before  {
        transform: translateX(-50%);
    }
    .active, .selected {
        /* background: rgb(var(--bg-color-2)); */
        background: linear-gradient(to right, 

            rgba(var(--bg-color-1)) 0%,
            rgba(var(--bg-color-2)) 50%,
            rgba(var(--bg-color-2)) 100% );
        /* background-size:   0 100%; */
        /* background-position:  0 100%; */
        /* background-repeat: no-repeat; */
        transition: 300ms;
    }
    .active:hover  {
        background: linear-gradient(to right, 

            rgba(var(--bg-color-1)) 0%,
            rgba(var(--bg-color-1)) 50%,
            rgba(var(--bg-color-2)) 100% );
    }
    .dropdown:hover li {
        height: 22px;
    }
    .dropdown:hover ul {
        opacity: 0.99;
        border: 1px solid rgb(var(--fg-1));
    }
    .dropdown ul {

        background: rgb(var(--bg-color-1));
        transition-property: opacity;
        transition-duration: 150ms;
        transition-delay: 100ms;
        opacity: 0.01;
        border: 0;
        position: absolute;
        top: 22px;
        list-style-type: none;
        box-sizing: border-box;
        width: 100%;
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
        width: 100%;
        margin-block: 11px;
        z-index: 9001;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
        gap: 3px;
    }
    .gallery {
        /* width: 450px; */
        max-height: 100vh;
        overflow: auto;
    }
</style>
