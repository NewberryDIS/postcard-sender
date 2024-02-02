<script lang="ts">

    export let data
    // console.log(data.postcards)
    import {base} from '$app/paths'
    import { imgUrl } from '$lib'
    import NewberryDCLogo from "$lib/NewberryDCLogo.svelte" 
    import Gallery from "$lib/Gallery.svelte" 
    import ShareButtons from "$lib/ShareButtons.svelte" 
</script>

    <svelte:head><title>Newberry Postcards</title></svelte:head>

<main>
    <div class="logo-wrapper">
        <NewberryDCLogo />
    </div>
    <div class="content">
        <section>
            <img src="{imgUrl(data.itemData.image, 'large')}" class="featured-image" alt=""/>
            <p class="caption">
                {data.itemData.imageTitle}
            </p>
        </section>
        <section>
            <ShareButtons />
        </section>
            <dark-mode-toggle></dark-mode-toggle>
        <!-- <img src="{base}/webp/{data.itemData.image}.webp" alt="" /> -->
    </div>
    <div class="gallery">
        <Gallery { data } />
    </div>
</main>

<style>
    .logo-wrapper {
        position: absolute;
        top: 11px;
        left: 11px;
        z-index: 9001;
    }
    h1, p {
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
        object-fit: contain;
        /* max-height: calc(90% - 60px); */
        flex: auto;
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
    section, header {
        min-width: 0;
        min-height: 0;
        display: flex;
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
header
</style>
