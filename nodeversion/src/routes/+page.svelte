<script>
    import {
      Content,
      Grid,
      Row,
      Column,
	  Button,
    } from "carbon-components-svelte";
    import "carbon-components-svelte/css/all.css";
    import '../styles/fonts.css';
    import '../styles/globals.css';
    import '../styles/overrides.css';
    
    import Header from '../lib/Header.svelte'
    import InputFields from '../lib/InputFields.svelte';
    import Background from '../lib/Background.svelte';

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
                        <div class="postcard-display">
                            <div class="frontwrapper">

                                <img src={randomPostcard[0][0]} class="postcard-front" alt="">
                            </div>
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
    @media only screen and (max-width: 1200) {
        .postcard-display {
        }
    }
    .buttons {
        margin: auto;
        display: flex;
        justify-content: center;
    }
    .wrapper {
        position: relative;
        margin: auto;
        width: 70%;
    }
    .backwrapper {
        position: relative;
    }
    main {
        position: absolute;
        /* background-color: #eaebe7; */
        /* padding: 130px 50px 50px 50px; */
        mix-blend-mode: normal;
        width: 100%;
        
    }
    .postcard-display {
        display: flex;    
        flex-direction: column;
        align-items: center;
    }
    .frontwrapper, .backwrapper {
        flex: 1;
        max-height: calc(100vh - 130px);
        object-fit: contain;
        padding: 10px;
        margin-top: 15px;
        /* background: repeating-linear-gradient(
            120deg,
            #eaebe7,
            #eaebe7 40px,
            #4051a3 40px,
            #4051a3 80px
        ); */
    }
    .postcard-front {
        max-height: calc(100vh - 130px);
    }
    .postcard-back {
        max-width: fit-content;
    }
    .backwrapper img, .frontwrapper img {
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        object-fit: contain;
        max-width: 100%;
    }
</style>