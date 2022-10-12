<script>
    import { Grid, Row, Column, Form, TextArea, TextInput, Button } from "carbon-components-svelte";
    import sgMail from '@sendgrid/mail'

    let message, fromemail, toemail
    let sendMessage = "Send Email!"

    console.log(import.meta.env) 
    sgMail.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY)
    const msg = {
        to: 'whiten@newberry.org', // Change to your recipient
        from: 'postcards@newberry.org', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }

const submitEmail = () => {
    console.log(message)
    console.log(fromemail)
    console.log(toemail)
     
    sendMessage = "Email sent!"

    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })

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
                <div class="buttons">
                    <Button kind="secondary" on:click={() => submitEmail()} >{sendMessage}</Button>
                </div>
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