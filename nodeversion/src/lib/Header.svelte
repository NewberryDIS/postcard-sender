<script>
  import {
    Header,
    SkipToContent,
  } from "carbon-components-svelte";
  import "carbon-components-svelte/css/all.css";
	import Nogo from "./Nogo.svelte";
</script>
  
<Header >
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>
  <a href="https://newberry.org"><Nogo /></a>
  <h1 >Postcard Sender</h1>
</Header>
  
<style>
  h1 {
    color: #4051a3;
    padding-left: 70px;
    font-family: 'Flecha M Medium';
  }
</style>