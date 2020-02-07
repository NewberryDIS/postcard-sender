<?php 

// image stuff

$postcard = $_POST['postcard'];
$page = $_POST['page'];
$back = $_POST['page'] === 0 ? 1 : 0;
$postcardimage = 'http://iiif.archivelab.org/iiif/' . $postcard .'$' . $page . '/full/400,/0/default.jpg';
$postcardback = 'http://iiif.archivelab.org/iiif/' . $postcard .'$' . $back . '/full/400,/0/default.jpg';
$postcardlink = 'https://archive.org/details/' . $postcard . '/mode/1up';

// variables from form, cleaned

$sendername = isset($_POST['sendername']) ? filter_var($_POST['sendername'], FILTER_SANITIZE_STRING) : false;
$senderemail = isset($_POST["senderemail"]) ? filter_var($_POST['senderemail'], FILTER_SANITIZE_EMAIL) : false;
$recipientname = isset($_POST["recipientname"]) ? filter_var($_POST['recipientname'], FILTER_SANITIZE_STRING) : false;
$recipientemail = isset($_POST["recipientemail"]) ? filter_var($_POST['recipientemail'], FILTER_SANITIZE_EMAIL) : false;
$messagetext = isset($_POST["messagetext"]) ? filter_var($_POST['messagetext'], FILTER_SANITIZE_STRING) : false;

// mail() stuff

$to = $recipientemail;
$subject = $sendername . ' sent you a postcard from the Newberry Library!';

// mail() headers 

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
$headers .= "To: $recipientemail\r\n";
$headers .= "From: Newberry Postcards <postcards@publications.newberry.org>\r\n";
$headers .= "Reply-To: $senderemail\r\n";
$headers .= "Return-Path: $senderemail\r\n";
$headers .= "Cc: $senderemail\r\n";

// email message
$message = "
    <html>
        <head>
        <title>" . $sendername . " sent you a postcard from the 
        Newberry Library!</title>
        <style>
            body {
                background: rgba(37,37,37,0.5);
                font-family: sans-serif;
            }
            a {
                color: black;
                
            }
            .container {
                display: inline-block;
                width: 600px;
                margin: auto;
            }
            header {
                padding: 15px 20px;
            }

            header, section {
                background-color: rgba(251, 247, 245,0.85); 
                border: 3px solid black;
                margin: 10px; 
            }
            .message {
                height: 400px;
                background-image: url(" . $postcardback  . ");
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
            }
            .messagewrapper {
                width: 100%;
                height: 100%;
            }
            .messagetr {
                vertical-align: middle;
            }
            .messagetext {
                width: 50%;
            }
            .messageleftwrapper, .messagerightwrapper {
                padding: 15px;
                background-color: rgba(251, 247, 245,0.85); 
                margin: 30px 10px;
            }
            .image {
                text-align: center;
            } 
            .headertext h1, .headertext p {
                margin: 0 0 0 10px;;
            }
            .headerimg, .headertext {
                display: inline-block;
                height: 55px;
            }
            .bottomtext {
                padding: 15px;
            }
        </style>
        </head>
        <body>
            <div class='container'>
                <header>
                    <div class='headerimg'>
                        <img src='https://publications.newberry.org/postcard-sender/logo.svg' />
                    </div>
                    <div class='headertext'>
                        <h1> " . $sendername . " sent you a postcard</h1>
                        <p> from the <a href='https://archive.org/details/newberrypostcards' >Newberry Postcards digital collection</a> 
                    </div>
                </header>
                <section class='image'>
                    <img src='" . $postcardimage . "' class='postcard-image' alt=''>
                </section>
                <section class='message'>
                    <table class='messagewrapper'>
                        <tr class='messagetr' colspan=2  >
                            <td class='messagetext'>
                                <div class='messageleftwrapper'>
                                    <p>" . $messagetext . "</p>
                                    <p>p.s. View thousands more images from the <a href='https://archive.org/details/newberrypostcards' >Newberry Postcards digital collection</a>  & use the Sender link below any image to email it to a friend</p>
                                </div>
                            </td>
                            <td class='messagetext'>
                                <div class='messagerightwrapper'>
                                    <p>" . $recipientname . "</p>
                                    <p>The Internet</p>
                                    <p>Earth, Probably</p>
                                </div>
                            </td>
                        </tr>
                    </table>
                </section>
                <section class='bottomtext'>
                    The ever-expanding <a href='https://archive.org/details/newberrypostcards' >Newberry Postcards digital collection</a> features over 25,000 images from our physical collection of more than a million postcards. This email was sent by our <a href='https://publications.newberry.org/postcard-sender/'>Postcard Sender</a>. Feel free to explore, and use the collection in ways no one else has imagined!
                </section>
            </div>
        </body>
    </html>";
// end of message

// messages for jquery to stuff into the response div

function sendSuccess(){
    echo json_encode(["toptext"=>"Success!","bottomtext"=>"The postcard has been emailed to " . $recipientname . " at " . $recipientemail . ".  There should be a copy in your inbox as well!"]);
    // $succRes=json_encode($succRes);
    // echo $succRes;
}
function sendFailure(){
    echo json_encode(array('postcard: ' => $postcard,'page: ' => $page,'se na: ' => $sendername,'se em: ' => $senderemail,'re na: ' => $recipientname,'re em: ' => $recipientemail,'mt: ' => $messagetext,"toptext"=>"Something went wrong.","bottomtext"=>"The postcard hasn't been sent.  Please take a look at your info and try again.", "success"=>false));
}
($sendername && $senderemail && $recipientname && $recipientemail && mail($to, $subject, $message, $headers)) ? sendSuccess() : sendFailure();
// $respondee = 7;
// $respondee === 1 ?  sendSuccess() : sendFailure();
?>