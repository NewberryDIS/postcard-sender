<script>
  import { onMount } from 'svelte'
  import '$css/newberry.css'
  import '$css/style.css'
  import '$css/mq.css'

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
