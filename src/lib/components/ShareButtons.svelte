<script>
    import { page } from '$app/stores'
    import { base } from '$app/paths'
    import { onMount } from 'svelte'
    import { imgUrl } from '$lib'
    import EmailForm from '$comps/EmailForm.svelte'
    import EmailIcon from '$icons/envelope-icon.svelte'
    import HyperlinkIcon from '$icons/hyperlink-icon.svelte'
    import LetterIcon from '$icons/letter-stamp-icon.svelte'
    import SmsIcon from '$icons/mobile-messages-icon.svelte'
    import MobileSmsMessagesIcon from '$icons/mobile-sms-messages-icon.svelte'

    export let image 
    $: id = $page.params.id || '2KXJ8ZSRY0U_H' 
    $: dataUrl = `https://digital.newberry.org/postcard-sender/${id}` 
    $: dataImg = imgUrl(image, 'large')
    const dataMessage = dataUrl
    const dataTitle = "Vintage Postcard Greeting!"
let showForm = false
    let copied = false
    $: copyText = copied ? 'Copied!' : 'Click to copy'
    
    async function copyClickHandler (){
      await navigator.clipboard.writeText(dataUrl)
      copied = true
      const copyButton = document.getElementById('copy-button')
      setTimeout(() => {
        copied = false
      }, 3000)
    }
    // console.log()
    const emailSubject = "Vintage Postcard from Newberry Library"
    $: emailBody= `I saw this postcard and thought of you!  ${dataUrl}`
</script>
<!-- {#if showForm} -->
<!--     <EmailForm {image}/> -->
<!-- {/if} -->
<div class="st-custom-buttons">
    <a href="mailto:?subject=Vintage%20Postcard%20from%20Newberry%20Library&body=I%20saw%20this%20postcard%20and%20thought%20of%20you!%20{dataUrl}" class="st-custom-button" target="_blank">
        <span class="icon">
            <EmailIcon />
        </span>
        <span class="btn-label">Send an email</span>
    </a>
    <!--     <button on:click={() => showForm = true}> -->
    <!--     <span class="icon"> -->
    <!--         <EmailIcon /> -->
    <!--     </span> -->
    <!--     <span class="btn-label">Send an email</span> -->
    <!-- </button> -->
    <!-- <button  -->
    <!--   class="st-custom-button"  -->
    <!--   data-network="email"  -->
    <!--   data-url={dataUrl}  -->
    <!--   data-image={dataImg}  -->
    <!--   data-message={dataMessage}  -->
    <!--   data-title={dataTitle}  -->
    <!--   data-email-subject={dataTitle}> -->
    <!--     <span class="icon"> -->
    <!--         <EmailIcon /> -->
    <!--     </span> -->
    <!--     <span class="btn-label">Send an email</span> -->
    <!-- </button> -->
<!-- <a href="sms:+&body=I saw this postcard and thought of you!  {dataUrl}"  class="st-custom-button" target="_blank"> -->
<!---->
<!--         <span class="icon"> -->
<!--             <SmsIcon /> -->
<!--         </span> -->
<!--         <span class="btn-label">Send a text</span> -->
<!--     </a> -->
    <button 
      class="st-custom-button" 
      data-network="sms" 
      data-url={dataUrl} 
      data-image={dataImg} 
      data-message={emailBody} 
      data-title={emailSubject}>
        <span class="icon">
            <SmsIcon />
        </span>
        <span class="btn-label">Send a text</span>
    </button>
    <button class="st-custom-button" class:copied on:click={copyClickHandler} id="copy-button">
        <span class="icon">
            <HyperlinkIcon />
        </span>
        <span class="btn-label">{copyText}</span>
    </button>
    <a href="https://collections.newberry.org/asset-management/{id}" class="st-custom-button" target="_blank">
        <span class="icon">
            <LetterIcon />
        </span>
        <span class="btn-label">View in our Digital Collections</span>
    </a>
</div>
<style>
    h1 {
        font-size: min(5vh, 7vw);
        /* margin-block: 0.5rem; */
        margin: 0;
    }
    .btn-label {
        padding-left: 0.5rem;
        height: 32px;
        width: 100%;
        text-align: left;
    }
    .st-custom-button {
        border: 1px solid rgb(var(--bg-color-2));
        background: linear-gradient(
            to right,
            rgba(var(--bg-color-2), 0.3),
            rgba(var(--bg-color-2), 0.3)
            );
        background-size:   0 100%;
        background-position:  0 100%;
        background-repeat: no-repeat;
        transition: background-size 300ms, border 500ms ease-out, color 500ms ease-out;
        box-sizing: border-box;
        position: relative;
        font-family: 'styrene';
        font-size: 0.87rem;
        cursor: pointer;
        color: rgb(var(--fg-color-1));
        height: 32px;
        width: 100%;
        padding: 0 11px 0 0;
        display: flex;
        justify-content: start;
        align-items: start;
        line-height: 32px;
        overflow: hidden;
    }

    .st-custom-button:hover,
    .st-custom-button:focus, .copied {
        background-size:  100% 100%;
    }
  .st-custom-button.copied {
      transition: all 500ms;
      border: 1px solid rgb(var(--fg-color-2)) !important;
      color: rgb(var(--fg-color-2)) !important;
  }
    .st-custom-buttons {
        margin: 20px auto;
    }

    .st-custom-buttons a {
        text-decoration: none;
    }

    .icon {
        width: 32px;
        height: 32px;
        color: rgb(var(--fg-color-1));
        background: rgb(var(--bg-color-2));
    }

    :global(.icon svg) {
        width: 32px;
        height: 32px;
        padding: 3px;
        display: inline-block;
        margin-right: 11px;
    }
    :global(.copied .icon svg) {
      color: rgb(var(--fg-color-2)) !important;
      fill: rgb(var(--fg-color-2)) !important;
    }
</style>
