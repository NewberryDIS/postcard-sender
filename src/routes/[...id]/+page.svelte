<script lang="ts">

    export let data
    console.log(data.postcards)
    import {base} from '$app/paths'
    import { imgUrl } from '$lib'
    import NewberryDCLogo from "$lib/NewberryDCLogo.svelte" 
    import Gallery from "$lib/Gallery.svelte" 
    import ShareButtons from "$lib/ShareButtons.svelte" 
    const imagess = data.alpca.map(a => a.image )
    // console.log(data.alpca)
</script>

    <svelte:head><title>Newberry Postcards</title></svelte:head>

<main>
    <div class="logo-wrapper">
        <NewberryDCLogo />
    </div>
    <div class="content">
        <header>
            <h1>Newberry Postcard Sender</h1>
            <p>Greet a friend with a vintage postcard image from the Newberry's collection</p>
        </header>
        <section>
            <img src="{imgUrl(data.itemData.image, 'large')}" class="featured-image" alt=""/>
            <p class="caption">
                {data.itemData.imageTitle}
            </p>
        </section>
        <section>
            <ShareButtons />
        </section>
        <!-- <img src="{base}/webp/{data.itemData.image}.webp" alt="" /> -->
    </div>
    <div class="gallery">
        <!-- <Gallery galleryData={ data.galleryData } postcards={ data.postcards } /> -->
        <ul>
            {#each imagess as img}
            <li>wget -O {img}.jpg https://collections.newberry.org/IIIF3/Image/{img}/full/300,/0/default.jpg && convert {img}.jpg {img}.webp
            {/each}
        </ul>

    </div>
</main>

<style>
    .logo-wrapper {
        position: absolute;
        top: 11px;
        left: 11px;
    }
    h1, p {
        margin: 0;
    }
    main {
        display: flex;
        gap: 11px;

    }
    .featured-image{
        max-width: 90%;
        object-fit: contain;
    }
    .content {
        min-width: 0;
        min-height: 0;
        box-sizing: border-box;
        padding: 100px 11px 11px 11px;
        flex: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
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
    .gallery {
        flex: 1;
    }

</style>
