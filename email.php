<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Newberry Postcard Sender</title>
    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
    <script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossorigin="anonymous"></script>
<?php 
        include "env.php";
        $randoms = [
            // valentines: 
            ['nby_LL11609', '0'],
            ['nby_LL11733', '0'],
            ['nby_LL358', '0'],
            ['nby_LL12311', '0'],
            ['nby_3BH352', '1'],
            ['nby_LL13508', '0']
            // after valentines: 
            // ['nby_6BH381', '1'],
            // ['nby_LL11784', '0'],
            // ['nby_LL12011', '0'],
            // ['nby_LL10864', '0'],
            // ['nby_0BH1419', '1'],
            // ['nby_1BH1502', '1']
        ];
        $rand = rand(0,count($randoms)-1);
        // $postcard = isset($_GET['id']) ? $_GET['id'] : $randoms[$rand][0];
        // $page = isset($_GET['p']) ? $_GET['p'] : $randoms[$rand][1];
        $postcard = isset($_POST['id']) ? $_POST['id'] : $randoms[$rand][0];
        $page = isset($_POST['p']) ? $_POST['p'] : $randoms[$rand][1];
        $back = $page === "0" ? "1" : "0";
        $json = file_get_contents('https://iiif.archivelab.org/iiif/' . $postcard . '/manifest.json');
        $obj = json_decode($json, true);
        // $orientation = $obj["sequences"]["canvases"][0]["height"] > $obj["sequences"]["canvases"][0]["width"] ? '400,' : ',400';
        $height = $obj[sequences][0][canvases][0][height];
        $width = $obj[sequences][0][canvases][0][width];
        $orientation =  $obj[sequences][0][canvases][0][height] > $obj[sequences][0][canvases][0][width] ? '400,' : ',400';


    $recipientname = $_POST['recipientname'];
    $recipientemail = (IsClean($_POST['recipientemail'])) ? $_POST['recipientemail'] : sendError('re');
    $sendername = $_POST['sendername'];
    $senderemail = (IsClean($_POST['senderemail'])) ? $_POST['senderemail'] : sendError('se');
    $messagetext = $_POST['messagetext'];
    $psurl = "//publications.newberry.org/postcard-sender";
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
                The ever-expanding Newberry Postcards digital collection features 
                over 25,000 images from our physical collection of more than a million 
                postcards. This email was sent by our <a href=\"https://publications.newberry.org/postcard-sender\">Postcard Sender</a>. 
                Feel free to explore, and use the collection in ways no one else has imagined!
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
    
    function IsClean($str)
    {
        $email_pattern = '/^[^@\s<&>]+@([-a-z0-9]+\.)+[a-z]{2,}$/i';
        
        if ((preg_match($email_pattern, $str) && ctype_print($str)) || strlen($str) === 0) {
                return true;
        } else {
            return false;
        }
    }
    
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
    $headers .= "To: $senderemail\r\n";
    $headers .= "From: Newberry Postcards <postcards@publications.newberry.org>\r\n";
    $headers .= "Reply-To: Newberry Postcards <postcards@publications.newberry.org\r\n";
    $headers .= "Return-Path: Newberry Postcards <postcards@publications.newberry.org\r\n";
    $headers .= "Bcc: postcards@publications.newberry.org\r\n";
    function console_log($output, $with_script_tags = true) {
        $js_code = 'console.log(' . json_encode($output, JSON_HEX_TAG) .  ');';
        if ($with_script_tags) {
            $js_code = '<script>' . $js_code . '</script>';
        }
        echo $js_code;
    }
    
    function sendError($v){
        echo '<script type="text/javascript">',
            'errorFunction(' . $v . ');',
            '</script>'
        ;
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
?> 
    <title>Newberry Postcard Sender</title>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<style>
        body, html {
            padding: 0;
            margin: 0;
            font-family: 'Lato', sans-serif;
        }
        body {
            background: rgba(37,37,37,0.5);
        }
        .container { 
            border-top: 3px solid rgba(37,37,37,1);
            border-bottom: 3px solid rgba(37,37,37,1); 
            background-color: rgba(251, 247, 245,0.85); 
            display: flex;
            margin: 10px auto 30px auto;
            padding: 30px;
            flex-wrap: wrap;
            align-content: center;
            justify-content: center;
        }
        .image {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            /* flex: 1; */
            flex-basis: <?php echo $height > $width ? '400px' : '600px';?>; 
            padding: 0 30px 0 0;
            margin: 0;
        }
        .back {
            /* flex: 1; */
            min-width: 600px;
            flex-basis: 600px;
            height:  <?php echo $height > $width ? '600px' : '400px';?>;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            /* display: flex;
            align-items: center;
            justify-content: center; */
        }
        .form,.addresswrapper {
            height: 100%;
        }
        .addresswrapper {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-content: flex-end;
            justify-content: flex-end;
        }
        .leftwrite {
            flex: 1;
            display: flex;
            align-content: flex-end;
            align-items: flex-end;
            justify-content: space-evenly;
        }
        .sectionleft, .sectionright {
            padding: 10px 20px;
            background-color: rgba(251, 247, 245,0.85); 
        }
        .sectionbottom {
            margin: auto;
            flex-basis: 50px;
            width: 75%;
            /* text-align: center; */
            display: flex;
            justify-content: center;
            align-content: flex-start;
            padding-top: 5px;
            padding-bottom: <?php echo ($height > $width ? '110' : '20'); ?>px;
        }
        button {
            margin: auto;
            cursor: pointer;
            transition: all 0.2s;
            padding: 10px 7px;
            border: 1px solid rgba(37,37,37,1);
            border-radius: 6px;
            box-shadow: 0 0 10px rgba(37,37,37,0.5);
            color: rgba(218,218,218);
            background: rgba(37,37,37,1);
        }
        button:hover {
            color: rgba(37,37,37,1);
            /* background: rgba(0,85,170,0.4); */
            background-color: rgba(251, 247, 245,0.85); 
            box-shadow: 0 0 10px rgba(37,37,37,1);
        }
        header, footer {
            border-top: 3px solid rgba(37,37,37,1);
            border-bottom: 3px solid rgba(37,37,37,1);
            background-color: rgba(251, 247, 245,0.85); 
            padding: 30px 0;
            margin: 20px 0;
        }
        header .headerwrapper {
            width: 80%;
            margin: auto;
            display: flex;
            // flex-direction: column;
            align-items: center;
            justify-content: flex-start;
        }
        footer .footerwrapper {
            margin: auto;
            text-align: center;
        }
        footer p {
            display: inline;
        }
        header img {
            flex-basis: 55px;
        }
        header .innerwrapper {
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-items: center;
        }
        header h1 {
            padding: 0 0 0 8px;
            margin: 0;
            // height: 56px;
            font-size: 28px;
            line-height: 28px;
            display: inline-block;
        }
        header h2 {
            font-size: 22px;
            line-height: 22px;
            padding: 0 0 0 8px;
            margin: 0;
        }
        h3 {
            padding: 15px;
            margin: 150px;
            border: 3px solid rgba(37,37,37,1);
            background: rgba(218,218,218,1);
        }
</style>
</head>
<body>
    <header>
        <div class="headerwrapper">

            <img src="logo.svg" alt="Newberry Logo">
            <div class="innerwrapper">
                <h1>
                    Newberry Postcard Sender
                </h1>
                <h2>
                    Send a postcard to a friend!
                </h2>
            </div>
        </div>
    </header>
    <div class="container">
        <div class="image">
            <a href="https://archive.org/details/<?php echo $postcard ?>/mode/1up">
                <img <?php echo 'src="http://iiif.archivelab.org/iiif/' . $postcard . '$' . $page . '/full/' . $orientation . '/0/default.jpg" title="' . $rand . '" ' ?> class="postcard-image" />
            </a>
        </div>
        <div class="back" style="background-image: url(<?php echo 'http://iiif.archivelab.org/iiif/' . $postcard . '$' . $back . '/full/500,/0/default.jpg'?>);">
            <div class="addresswrapper">

<h3>
<?php
mail($to, $subject, $message, $headers) ? sendSuccess() : sendFailure();

?>
</h3>

                <div class="leftwrite">
                    <div class="sectionleft">
                        <p>Your name: <?php echo $sendername; ?></p>
                        <p id="semail">Your E-mail: <?php echo $senderemail ; ?></p>
                        <p>Your message: <?php echo $messagetext ; ?></p>
                    </div>
                    <div class="sectionright">
                        <p>Your friend's name: <?php echo $recipientname ; ?></p>
                        <p id="remail">Your friend's E-mail: <?php echo $recipientemail ; ?></p>
                    </div>
                </div>
                <div class="sectionbottom">
                    <button onClick="goBack">Go Back</button>
                </div>
            </div>
        </div>
    </div>
</body>

<script>
function goBack() {
    window.history.back();
}
function errorFunction(t){
    var jobj = t === 're' ? $('#remail') : $('#semail');
    $(jobj).css('color','red');
}
</script>

</body>
</html>
