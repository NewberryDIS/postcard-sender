<script lang="ts">
    import { onMount } from 'svelte'
    export let galleryData
    import { slugs, activeGallery, showImage } from '$lib'
    import Arrow from '$icons/arrow.svelte'
    let open = false
    onMount(() => {
        const dropdown = document.getElementById('dropdown')
        document.body.addEventListener('click', (event) => {
            if (!dropdown.contains(event.target) && open){
                open = false
            }
        }) 
    })
</script>

<div class="dropdown" class:open on:click={() => open = !open} id="dropdown">
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
