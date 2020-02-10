<?php 

// image stuff

$postcard = isset($_POST['id']) ? $_POST['id'] : 'nuffin';
$page = isset($_POST['p']) ? $_POST['p'] : ' oaslo norfin';
$back = $page === '0' ? '1' : '0';
$postcardimage = 'http://iiif.archivelab.org/iiif/' . $postcard .'$' . $page . '/full/400,/0/default.jpg';
$postcardback = 'http://iiif.archivelab.org/iiif/' . $postcard .'$' . $back . '/full/400,/0/default.jpg';
$postcardlink = 'https://archive.org/details/' . $postcard . '/mode/1up';

// variables from form, cleaned

// $sendername = isset($_POST['sendername']) ? filter_var($_POST['sendername'], FILTER_SANITIZE_STRING) : false;
// $senderemail = isset($_POST["senderemail"]) ? filter_var($_POST['senderemail'], FILTER_SANITIZE_EMAIL) : false;
// $recipientname = isset($_POST["recipientname"]) ? filter_var($_POST['recipientname'], FILTER_SANITIZE_STRING) : false;
// $recipientemail = isset($_POST["recipientemail"]) ? filter_var($_POST['recipientemail'], FILTER_SANITIZE_EMAIL) : false;
// $messagetext = isset($_POST["messagetext"]) ? filter_var($_POST['messagetext'], FILTER_SANITIZE_STRING) : false;

$sendername =       isset($_POST['sendername'])     ? $_POST['sendername']          : 'false';
$senderemail =      isset($_POST["senderemail"])    ? $_POST['senderemail']         : 'false';
$recipientname =    isset($_POST["recipientname"])  ? $_POST['recipientname']       : 'false';
$recipientemail =   isset($_POST["recipientemail"]) ? $_POST['recipientemail']      : 'false';
$messagetext =      isset($_POST["messagetext"])    ? $_POST['messagetext']         : 'false';

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
$headers .= "Bcc: postcards@publications.newberry.org\r\n";

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

            .header, .image, .message, .bottomtext {
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
                background-color: rgba(251, 247, 245,0.95); 
                margin: 30px 10px;
            }
            .messagewrap {
                overflow-wrap: break-word;
                word-wrap: break-word;
                -ms-word-break: break-all;
                word-break: break-word;
                -ms-hyphens: auto;
                -moz-hyphens: auto;
                -webkit-hyphens: auto;
                hyphens: auto;
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
                <div class='header'>
                    <div class='headerimg'>
                        <img src='https://publications.newberry.org/postcard-sender/logo.svg' />
                    </div>
                    <div class='headertext'>
                        <h1> " . $sendername . " sent you a postcard</h1>
                        <p> from the <a href='https://archive.org/details/newberrypostcards' >Newberry Postcards digital collection</a> 
                    </div>
                </div>
                <div class='image'>
                    <img src='" . $postcardimage . "' class='postcard-image' alt=''>
                </div>
                <div class='message'>
                    <table class='messagewrapper'>
                        <tr class='messagetr' colspan=2  >
                            <td class='messagetext'>
                                <div class='messageleftwrapper'>
                                    <p class='messagewrap'>" . $messagetext . "</p>
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
                </div>
                <div class='bottomtext'>
                    The ever-expanding <a href='https://archive.org/details/newberrypostcards' >Newberry Postcards digital collection</a> features over 25,000 images from our physical collection of more than a million postcards. This email was sent by our <a href='https://publications.newberry.org/postcard-sender/'>Postcard Sender</a>. Feel free to explore, and use the collection in ways no one else has imagined!
                </div>
            </div>
        </body>
    </html>";
// end of message

// messages for jquery to stuff into the response div

function sendSuccess($data){
    echo json_encode(["toptext"=>"Success!","bottomtext"=>"The postcard has been emailed to " . $data['rena'] . " at " . $data['reem'] . ".  There should be a copy in your inbox as well!"]);
    // $succRes=json_encode($succRes);
    // echo $succRes;
}
$dataArray['postcard'] = $postcard;
// var_dump( $postcard );
// var_dump( $dataArray );
// var_dump( $senderemail );

// echo $postcard;
$dataArray['page'] = $page;
$dataArray['sena'] = $sendername;
$dataArray['seem'] = $senderemail;
$dataArray['rena'] = $recipientname;
$dataArray['reem'] = $recipientemail;
$dataArray['mt'] = $messagetext;
$dataArray['toptext'] = "Something went wrong.";
$dataArray['bottomtext'] = "The postcard hasn't been sent.  Please take a look at your info and try again.";
$dataArray['success'] = false;

// var_dump($dataArray);
function sendFailure($data){
    echo json_encode($data);
}
($sendername && $senderemail && $recipientname && $recipientemail && mail($to, $subject, $message, $headers)) ? sendSuccess($dataArray) : sendFailure($dataArray);
// $respondee = 7;
// $respondee === 7 ?  sendSuccess($dataArray) : sendFailure($dataArray);
?>