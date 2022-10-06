<script>
    export const prerender = true
    import { browser } from '$app/environment';
    import Background from '../lib/Background.svelte';

    import '../styles/fonts.css';
    import '../styles/globals.css';
    import '../styles/overrides.css';

    import Header from '../lib/Header.svelte'
    import InputFields from '../lib/InputFields.svelte';
    import {
      Content,
      Grid,
      Row,
      Column,
	  Button,
    } from "carbon-components-svelte";
    import "carbon-components-svelte/css/all.css";

    let holiday = 'Halloween'

    import { halloween as postcardArray} from '../postcards'

    let randomIndex = Math.round(Math.random() * postcardArray.length) -1
    $: randomPostcard = postcardArray[randomIndex]
    const randomize = () => {
        let newIndex = Math.round(Math.random() * postcardArray.length) -1
        while (newIndex === randomIndex) {
            newIndex = Math.round(Math.random() * postcardArray.length) -1
        }
        randomIndex = newIndex
    }
    // const testUrlFront = 'https://collections.newberry.org/IIIF3/Image/2KXJ8Z7PXRK5/full/1000,/0/default.jpg'
    // const testUrlBack = 'https://collections.newberry.org/IIIF3/Image/2KXJ8Z7P2EHX/full/max/0/default.jpg'


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
                            <img src={randomPostcard[0][0]} class="postcard-front" alt="">
                            <div class="backwrapper">

                                <img src={randomPostcard[1][0]} class="postcard-back" alt="" >
                                <InputFields />
                            </div>
                        </div>
                        <div class="buttons">

                            <Button kind="secondary" on:click={() => randomize()}>Random {holiday} Postcard</Button>
                        </div>
                    </main>
                </div>
                
            </Column>
        </Row>
    </Grid>
</Content>
  


<style>
    .buttons {
        margin: auto;
        display: flex;
        justify-content: center;
    }
    .wrapper {
        position: relative;
        width: 100%;
    }
    .backwrapper {
        position: relative;
    }
    main {
        position: absolute;
        background-color: #eaebe7;
        /* padding: 130px 50px 50px 50px; */
        padding: 50px;
        mix-blend-mode: normal;
        width: 100%;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        
    }
    .postcard-display {
        margin: auto;
        width: 100%;
        display: flex;
    }
    .postcard-front, .backwrapper {
        flex: 1;
        width: 40%;
        max-height: calc(100vh - 130px);
        object-fit: contain;
        padding: 10px;
        /* background: repeating-linear-gradient(
            120deg,
            #eaebe7,
            #eaebe7 40px,
            #4051a3 40px,
            #4051a3 80px
        ); */
    }
    .backwrapper img {
        width: 100%;
        object-fit: contain;
    }
</style>