<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Newberry Postcard Sender</title> 
    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
    <script>
        if(true) {
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        }
        if (typeof ga === "function") {
            ga('create', 'UA-5551324-4', 'auto', {}); ga('send', 'pageview');
    </script>
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
    $page = isset($_GET['p']) ? $_GET['p'] : $randoms[$rand][1];
    ?>
    <style>
        body, html {
            padding: 0;
            margin: 0;
            font-family: 'Lato', sans-serif;
        }
        body {
            background: rgba(37,37,37,0.7);
        }
        .container, .header {
            /* width: 70%; */
            margin: 20px auto 5px auto;
            padding: 15px;
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
            width: 100%;
        }
        .addr-img {
            width: 80%;
        }
        .addr-bottom-div {
            width: 50%;
            margin: auto;
        }
        .greeting-container, .image-td, .header, .bottomdiv {
            /* background: rgba(218,218,218,1); */
            background: #fbf7f5;
            border: 3px solid black;
            margin: 10px auto;
            padding: 20px;
        }
        .input {
            width: 100%;
        }
        .messageinput {
            heightL 
        }
        .table-two {
            width: 80%;
            margin: auto;
        }
        .bottomdiv {

            width: 30%;
            text-align: center;
        }
        .topwrapper {
            display: flex;
            // flex-direction: column;
            align-items: center;
            justify-content: flex-start;
        }
        .topwrapper img {
            flex-basis: 55px;
        }
        .innerwrapper {
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-items: center;
        }
        .innerwrapper h1 {
            padding: 0 0 0 8px;
            margin: 0;
            // height: 56px;
            font-size: 28px;
            line-height: 28px;
            display: inline-block;
        }
        h2 {
            font-size: 22px;
            line-height: 22px;
            padding: 0 0 0 8px;
            margin: 0;
        }
    </style>
</head>
<body>
    <table class="container">
        <tr>
            <td class="header">
                <div class="topwrapper">
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
            </td>
        </tr>
        <tr>
            <td class="image-td">
                <a href="https://archive.org/details/<?php echo $postcard ?>/mode/1up">
                <img <?php echo 'src="http://iiif.archivelab.org/iiif/' . $postcard . '$' . $page . '/full/500,/0/default.jpg" title="' . $rand . '" ' ?> class="postcard-image" />
            </a>
            </td>
            </tr><tr>
            <td class="greeting-container">
                <table class="table-two">
                    <tr>
                        <td class="greeting-p">
                            <p>
                            <form action="email.php?pc=<?php echo $postcard ?>" method="post">
                                <p>Your friend's name: <br /><input class="input" type="text" name="recipientname"></p>
                                <p>Your friend's E-mail: <br /><input class="input" type="text" name="recipientemail"></p>
                                <p>Your message: <br /><textarea rows="4" class="input messageinput" type="text" name="messagetext"></textarea></p>
                                <p>Your name: <br /><input class="input" type="text" name="sendername"></p>
                                <p>Your E-mail (optional): <br /><input class="input" type="text" name="senderemail"></p>
                                <input type="submit">
                            </form>

                            </p>
                        </td>
                        <td>
                            <table>
                                <tr>
                                    <td class="addr-top-td">
                                        <img class="addr-img" src="nps.png" />
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>   
        </tr>
    </table>
    <div class="bottomdiv">
        <p>p.s. View thousands more images from the <a href="https://archive.org/details/newberrypostcards">Newberry Postcards</a> digital collection & use the Sender link below any image to email it to a friend.</p>
        <p><small>We do not use your or your friend's data in any way, and we will not share it.  We count the number of times our postcard sender is used, but that's it.  We're librarians: your privacy is fundamental to our vocation.</small></p>
    </div>
    
</body>
</html>
