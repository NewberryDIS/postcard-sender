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
  <div class="page-title">
    <h1 >Postcard Sender</h1>
    <h3 class="subtext">Send a postcard to a friend!</h3>
  </div>
</Header>
  
<style>
  h1, .subtext {
    color: #4051a3;
    padding-left: 70px;
  }
  h1 {
    font-family: 'Flecha M Medium';
    line-height: 30px;
  }
  .subtext {
    font-size: 20px !important;
    line-height: 18px;
  }
  .page-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
  }
</style>