<script lang="ts">
  import '$styles/newberry.css'
  import '$styles/mq.css'
  import { onMount } from 'svelte'

  onMount( async () => {
    await import('$lib/dark-mode-toggle.js');
  })
</script>
<slot />
