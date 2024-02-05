<script>
  export let galleryData
  import { slugs , activeGallery} from '$lib'
  import Arrow from '$icons/arrow.svelte'
</script>
<div class="dropdown">
    <div class="selected"><span>{galleryData.title}<Arrow /></span></div>
    <ul>
        {#each slugs as s}
            <li>
                <button class={s[0] === galleryData.slug ? 'active' : 'inactive' } on:click={() => $activeGallery = s[0]}>
                    {s[1]}
                    {#if s[0] === galleryData.slug}
                        <Arrow rotate />
                    {/if}
                </button>
            </li>
        {/each}
    </ul>
</div>
