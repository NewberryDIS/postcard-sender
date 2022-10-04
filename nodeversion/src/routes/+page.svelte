<script>
    export const prerender = true
    import { browser } from '$app/environment';
    import Background from '../lib/Background.svelte';

    import '../styles/fonts.css';
    import '../styles/globals.css';
    import '../styles/overrides.css';

    import Header from '../lib/Header.svelte'
    import {
      Content,
      Grid,
      Row,
      Column,
    } from "carbon-components-svelte";
    import "carbon-components-svelte/css/all.css";
  

</script>
<Background />
<Header />


<Content>
    <Grid>
        <Row>
            <Column>
                <div class="wrapper">

                    <main>
                        
                        <h2>Send a Postcard to a Friend!</h2>
                        <div class="postcard-display">
                            <img src="front" class="postcard-front" alt=""><img src="back" class="postcard-back" alt="">
                        </div>
                    </main>
                </div>
                
            </Column>
        </Row>
    </Grid>
</Content>
  


<style>
    .wrapper {
        position: relative;
        width: 100%;
    }
    main {
        position: absolute;
        background-color: #eaebe7;
        padding: 50px;
        mix-blend-mode: normal;
        width: 100%;
        /* border: 1px solid black; */
        border-radius: 5px;
        /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px, 
                    rgba(0, 0, 0, 0.45) 0px 0px 5px inset; */
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .postcard-front, .postcard-back {
        width: 500px;
        height: 500px;
        background: repeating-linear-gradient(
            120deg,
            #eaebe7,
            #eaebe7 40px,
            #4051a3 40px,
            #4051a3 80px
        );
    }
</style>