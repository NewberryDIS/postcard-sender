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
    <script src="https://www.google.com/recaptcha/api.js?render=<?php echo getenv('PC_RECAPTCHA_PU_KEY'); ?>"></script>
    <?php 
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
        $postcard = isset($_GET['id']) ? $_GET['id'] : $randoms[$rand][0];
        $_POST['id'] = $postcard;
        $page = isset($_GET['p']) ? $_GET['p'] : $randoms[$rand][1];
        $_POST['page'] = $page;
        $back = $page === "0" ? "1" : "0";
        $json = file_get_contents('https://iiif.archivelab.org/iiif/' . $postcard . '/manifest.json');
        $obj = json_decode($json, true);
        $height = $obj['sequences'][0]['canvases'][0]['height'];
        $width = $obj['sequences'][0]['canvases'][0]['width'];
        $orientation =  $obj['sequences'][0]['canvases'][0]['height'] > $obj['sequences'][0]['canvases'][0]['width'] ? '400,' : ',400';
        // https://archive.org/download/nby_LL5282/nby_LL5282_meta.xml
        // http://archive.org/metadata/nby_LL5282
        // https://iiif.archivelab.org/iiif/nby_LL5282/manifest.json
        function console_log($output) {
            $js_code = 'console.log(' . json_encode($output, JSON_HEX_TAG) . ');';
            $js_code = '<script>' . $js_code . '</script>';
            echo $js_code;
        }
    ?>
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
        .submitbutton {
            margin: auto;
            cursor: pointer;
            transition: all 0.2s;
            padding: 10px 7px;
            border: 1px solid rgba(37,37,37,1);
            border-radius: 6px;
            box-shadow: 0 0 10px rgba(37,37,37,0.5);
            color: rgba(218,218,218);
            background: rgba(0,85,170,1);
        }
        .submitbutton:hover {
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
    </style>
</head>
<body>
    <?php
// echo getenv('PC_RECAPTCHA_PU_KEY');
// echo getenv("PC_RECAPTCHA_PU_KEY");
// echo $_ENV['PC_RECAPTCHA_PU_KEY'];
// echo $_ENV["PC_RECAPTCHA_PU_KEY"];
// echo $_SERVER['PC_RECAPTCHA_PU_KEY'];
// echo $_SERVER["PC_RECAPTCHA_PU_KEY"];
    ?>
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
            <form id="submitform" class="form">
                <div class="addresswrapper">
                    <div class="leftwrite">
                        <div class="sectionleft">
                            <p>Your name: <br /><input class="input" type="text" name="sendername" id="sendername"></p>
                            <p>Your E-mail (optional): <br /><input class="input" type="text" name="senderemail" id="senderemail"></p>
                            <p>Your message: <br /><textarea rows="4" class="input messageinput" type="text" name="messagetext" id="messagetext"></textarea></p>
                        </div>
                        <div class="sectionright">
                            <p>Your friend's name: <br /><input class="input" type="text" name="recipientname" id="recipientname"></p>
                            <p>Your friend's E-mail: <br /><input class="input" type="text" name="recipientemail" id="recipientemail"></p>
                        </div>
                    </div>
                </div>
                <div class="sectionbottom">
                    <input class="submitbutton" type="submit">
                </div>
            </form>
        </div>
    </div>
</body>

<script>
    var recaptchaPubKey = <?php echo getenv('PC_RECAPTCHA_PU_KEY');?>;
    $('#submitform').submit(function(event) {
        event.preventDefault();
        grecaptcha.ready(function() {
            grecaptcha.execute(recaptchaPubKey, {action: 'email_submit'}).then(function(token) {
                $('#submitform').prepend('<input type="hidden" name="token" value="' + token + '">');
                $('#submitform').prepend('<input type="hidden" name="action" value="email_submit" method="post" >');
                $('#submitform').unbind('email_submit').submit();
            });;
        });
    });

</script>
</html>