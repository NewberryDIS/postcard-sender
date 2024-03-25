<script>
import { base } from '$app/paths'
import data from '$lib/postcards.json'

const linklist = data.map(i => i.mei)
</script>

<div class="linkwrap">
  {#each linklist as link}
  <a href="{base}/{link}">.</a>
{/each}
</div>


<style>
.linkwrap {
  position: fixed;
  top: -10px;
  right: -10px;
  bottom: -10px;
  left: -10px;
  background-color: #333;
  color: #ccc;

}
a {
  font-size: 8px;
}
</style>
