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
<style>

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
.open li{
    height: 22px !important;
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
.open ul {
    pointer-events: auto !important;
    opacity: 0.99 !important;
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
