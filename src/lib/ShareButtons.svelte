<script>
    import { base } from '$app/paths'
    import EmailIcon from '$icons/envelope-icon.svelte'
    import HyperlinkIcon from '$icons/hyperlink-icon.svelte'
    import LetterIcon from '$icons/letter-stamp-icon.svelte'
    import SmsIcon from '$icons/mobile-messages-icon.svelte'
    import MobileSmsMessagesIcon from '$icons/mobile-sms-messages-icon.svelte'
    import QuIconn from '$icons/quinn-icon.svelte'
</script>

<div class="st-custom-buttons">
    <button data-network="email" class="st-custom-button">
        <span class="icon">
            <EmailIcon />
        </span>
        <span class="btn-label">Email</span>
    </button>
    <button data-network="sms" class="st-custom-button">
        <span class="icon">
            <SmsIcon />
        </span>
        <span class="btn-label">Text Message</span>
    </button>
    <button data-network="copy" class="st-custom-button">
        <span class="icon">
            <HyperlinkIcon />
        </span>
        <span class="btn-label">Copy Link</span>
    </button>
    <a href="{base}" class="st-custom-button">
        <span class="icon">
            <LetterIcon />
        </span>
        <span class="btn-label">Send another postcard</span>
    </a>
    <!-- <button class="st-custom-button"> -->
    <!--   <span class="icon"> -->
    <!--     <QuIconn /></span> -->
    <!--   <span class="btn-label">Ask Quinn to Print it</span> -->
    <!-- </button> -->
    <!-- <button class="st-custom-button"> -->
    <!--   <span class="icon"> -->
    <!--     <QuIconn /></span> -->
    <!--   <span class="btn-label">Ask Quinn to Draw it</span> -->
    <!-- </button> -->
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
        transition: background-size 300ms;
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
    .st-custom-button:focus {
        background-size:  100% 100%;
    }

    .st-custom-buttons {
        width: clamp(90%, 73%, 66%);
        margin: 0 auto;
        display: grid;
        grid-template-rows: repeat(2, 1fr); /* Two rows, each taking 1 fraction of available space */
        grid-template-columns: repeat(2, 1fr); /* Two columns, each taking 1 fraction of available space */
        gap: 3px;
    }

    .st-custom-buttons a {
        text-decoration: none;
    }

    .st-custom-button {
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
</style>
