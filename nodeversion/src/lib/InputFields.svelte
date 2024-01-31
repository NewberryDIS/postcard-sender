<script>
    import { Grid, Row, Column, Form, TextArea, TextInput, Button } from "carbon-components-svelte";
    import sgMail from '@sendgrid/mail'

    let message, fromemail, toemail
    let sendMessage = "Send Email!"
    function submitForm() {
    fetch("/api/sendmail");
  }

</script>
<div class="postcard-coverer">
    <Grid>
        <Row>
            <Column >
                <div class="message">
                        
                    <TextArea
                        hidelabel
                        placeholder={import.meta.env.SSR}
                        rows={7}
                        bind:value={message}
                    />
                </div>
            </Column>
            <Column ></Column>
        </Row>
        <Row>
            <Column >
                <div class="fromemail">
                    <TextInput
                        hidelabel
                        placeholder="Your E-Mail..."
                        bind:value={fromemail}
                    />
                </div>
            </Column>
            <Column >
                <div class="toemail">
                    
                    <TextInput
                        hidelabel
                        placeholder="Recipient's E-Mail..."
                        bind:value={toemail}
                    />
                </div>
            </Column>
        </Row>
        <Row>
            <Column sm={{ span: 4, offset: 0 }}>
                <!-- <div class="buttons">
                    <Button kind="secondary" on:click={() => submitEmail()} >{sendMessage}</Button>
                </div> -->
            
<form on:submit|preventDefault={submitForm}>
    <button type="submit">Submit</button>
  </form>
            </Column>
        </Row>
    </Grid>
</div>

<style>
    .buttons, .fromemail, .toemail {
        margin: 10px auto;
    }
    .buttons {
        text-align: center;
    }
    .postcard-coverer {
        position: absolute;
        right: 0;
        bottom: 10%;
        left: 0;
        padding: 10px;
    }
    /* .message {
        margin: 30px;
        top: 10%;
        left: 10%;
        width: 40%;
        
    }
    .fromemail {
        width: 40%;
        margin: 30px;
    }
    .toemail {
        width: 40%;
        margin: 30px;
    } */
</style> 