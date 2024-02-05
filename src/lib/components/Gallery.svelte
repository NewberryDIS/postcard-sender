
<script>
import { MasonryGrid } from "@egjs/svelte-grid";
  import { base } from '$app/paths'
  export let postcards

  const gap = 5;
  const align = "center";
  const defaultDirection = "end" 
</script>
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
