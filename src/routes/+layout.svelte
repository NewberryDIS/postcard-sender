<script>
  import { onMount } from 'svelte'

  onMount( async () => {
    await import('$lib/dark-mode-toggle.js');
    await import('$lib/newberry-logo.js');
  })
  // {console.log(allData)}
</script>

  <dark-mode-toggle></dark-mode-toggle>
    <div class="logo-wrapper">
      <newberry-logo></newberry-logo>
    </div>
  <slot />
<style>

.logo-wrapper {
    position: absolute;
    top: 11px;
    left: 11px;
    z-index: 9001;
}

</style>
