<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">

<?php 
$title = 'Newberry Postcard Sender';
    $randoms = [
        'nby_LL8410',
        'nby_LL5511',
        'nby_LL9753',
        'nby_LL4581',
        'nby_1BH2475',
        'nby_LL4302',
        'nby_LL1276',
        'nby_RT244'
    ];
    $postcard = isset($_GET['pc']) ? $_GET['pc'] : $randoms[rand(0,count($randoms))];
    $postcardimage = 'http://iiif.archivelab.org/iiif/' . $postcard .'$0000/full/400,/0/default.jpg';
    $postcardlink = 'https://archive.org/details/' . $postcard . '/mode/1up';
?> 
    <title><?php echo $title ?></title>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<style>
    body, html {
        padding: 0;
        margin: 0;
        background: rgba(37,37,37,1);
        font-family: 'Lato', sans-serif;
    }
    .container {
        width: 75%;
        margin: 20px auto 5px auto;
        padding: 15px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        font-family: sans-serif;
        /* background: rgba(218,218,218,0.5); */
        background: #fbf7f5;
            border: 3px solid black;
        box-shadow: 0 0 10px rgba(218,218,218,0.5);
    }
    .image {

        box-shadow: 0 0 10px  rgba(37,37,37,1);
    }
    h1 {
        padding: 30px;
        margin: 30px auto 0 auto;
        font-family: sans-serif;
    }
    .buttonwrapper {
        width: 100%;
        text-align: center;
    }
    button {
        margin: auto;
        cursor: pointer;
        transition: all 0.2s;
        padding: 10px 7px;
        border: 1px solid rgba(37,37,37,1);
        border-radius: 6px;
        box-shadow: 0 0 10px rgba(37,37,37,0.5);
        color: rgba(37,37,37,1);
        background: rgba(0,85,170,0.7);

    }
    button:hover {
        background: rgba(0,85,170,0.4);
        border-radius: 6px;box-shadow: 0 0 10px rgba(37,37,37,1);
    }
    ul {
        margin: 0 auto 30px auto;
        list-style-type: none;
    }
</style>
</head>
<body>

    <div class="container">
    <div class="image">
        <a href="<?php echo $postcardlink ?>" title="Back to Image">
            <img src="<?php echo $postcardimage ?>" alt="" />
        </a>
    </div>
    <div class="textbox">
        <h1 id="result">
<?php 
$button = "Go Back";
$recipientname = (IsInjected($_POST['recipientname'])) ? sendError() : $_POST['recipientname'];
$recipientemail = (IsInjected($_POST['recipientemail'])) ? sendError() : $_POST['recipientemail'];
$sendername = (IsInjected($_POST['sendername'])) ? sendError() : $_POST['sendername'];
$senderemail = (IsInjected($_POST['senderemail'])) ? sendError() : $_POST['senderemail'];
$messagetext = (IsInjected($_POST['messagetext'])) ? sendError() : $_POST['messagetext'];

$to = $recipientemail;
$subject = $sendername . ' sent you a postcard from the Newberry Library!';

$message = "
<html>
<head>
<title>" . $sendername . " sent you a postcard from the 
Newberry Library!</title>
<style>
    .container, header {
        /* width: 70%; */
        margin: auto;
    }
    .bottomdiv {
        width: 70%;
        margin: auto;
    }
    .image-td {
        text-align: center;
    }
    .image-img {
        max-height: 75min;
    }
    .greeting-p {
        padding: 20px;
        border-right: 1px solid #ccc;
        width: 50%;
    }
    .addr-top-td {
        text-align: right;
    }
    .addr-img {
        width: 50%;
    }
    .addr-bottom-div {
        width: 50%;
        margin: auto;
    }
    .greeting-container, .image-td {
        border: 3px solid black;
        margin: 10px;
        padding: 20px;
    }
</style>
</head>
<body>
    <table class='container'>
        <tr>
            <td class='header'>
                <h1> " . $sendername . " has sent you a postcard!</h1>
            </td>
        </tr>
        <tr>
            <td class='image-td'>
                <a href='" . $postcardlink . "'>
                    <img src='" . $postcardimage . "' class='postcard-image' />
                </a>
            </td>
        </tr>
        <tr>
            <td class='greeting-container'>
                <table>
                    <tr>
                        <td class='greeting-p'>
                            <p>" . $messagetext . "</p>
                        </td>
                        <td>
                            <table>
                                <tr>
                                    <td class='addr-top-td'>
                                        <img class='addr-img' src='https://publications.newberry.org/postcard-sender/nps.png' />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <div class='addr-bottom-div'>
                                            <p>" . $recipientname . "</p>
                                            <p>The Internet</p>
                                            <p>Earth, Probably</p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>   
        </tr>
    </table>
    <div class='bottomdiv'>
        <p>
            The Newberry Library's Teich Collection, of over 25,000 postcards,
            is entirely digitized, and available for sending!  This email was 
            sent by our <a href='newberry-postcards'>Postcard Sender</a>.  
            Feel free to explore, and use the collection in ways no one 
            else has imagined!
        </p>
        <small>
            We do not use your or your friend's data in any way, and we will not share it.
            We count the number of times our postcard sender is used, 
            but that's it.
            We're librarians: your privacy is fundamental to our vocation.
        </small>
    </div>
</body>
</html>";

function IsInjected($str)
{
    $injections = array('(\n+)',
           '(\r+)',
           '(\t+)',
           '(%0A+)',
           '(%0D+)',
           '(%08+)',
           '(%09+)'
           );
               
    $inject = join('|', $injections);
    $inject = "/$inject/i";
    
    if(preg_match($inject,$str))
    {
      return true;
    }
    else
    {
      return false;
    }
}

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
$headers .= "To: $recipientemail\r\n";
$headers .= "From: Newberry Postcards <postcards@publications.newberry.org>\r\n";
$headers .= "Reply-To: $senderemail\r\n";
$headers .= "Return-Path: $senderemail\r\n";
$headers .= "Cc: $senderemail\r\n";
// ??
$headers .= "Bcc: postcards@publications.newberry.org\r\n";
function console_log($output, $with_script_tags = true) {
    $js_code = 'console.log(' . json_encode($output, JSON_HEX_TAG) . 
');';
    if ($with_script_tags) {
        $js_code = '<script>' . $js_code . '</script>';
    }
    echo $js_code;
}

function sendError(){
    echo "Your email submission appears to have injections.  Please feel free to remove them, or move on.";
    console_log('hackerz');
}
function sendSuccess(){
    echo "Your email has been sent!  If you added your own address, you can expect to find it in your inbox.";
    $title = 'Email sent!  Newberry Postcard Sender';
    $button = "Send It Again";
    console_log('success');
}
function sendFailure(){
    echo "Your email hasn't been sent.  Take a look at your info and try again.";
    $title = 'Email didn\'t send';
    $button = "Try Again";
    console_log('failure');
}

mail($to, $subject, $message, $headers) ? sendSuccess() : sendFailure();

?></h1>
<ul>
    <li>Recipient's Name: <?php echo $recipientname ?></li>
    <li>Recipient's Email: <?php echo $recipientemail ?></li>
    <li>Sender's Name: <?php echo $sendername ?></li>
    <li>Sender's Email: <?php echo $senderemail ?></li>
    <li>Message Text: <?php echo $messagetext ?></li>
</ul>
<div class="buttonwrapper">
    <button onclick="goBack()"><?php echo $button ?></button>
</div>
</div>
</div>

<script>
function goBack() {
    window.history.back();
}
</script>

</body>
</html>