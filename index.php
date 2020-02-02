<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Newberry Postcard Sender</title> 
    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
    <?php 

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
/*            background: rgba(218,218,218,1);*/
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
    </style>
</head>
<body>

<table class="container">
        <tr>
            <td class="header">
                <h1>Send a postcard to a friend!</h1>
            </td>
        </tr>
        <tr>
            <td class="image-td">
                <a href="https://archive.org/details/<?php echo $postcard ?>/mode/1up"><img <?php echo 'src="http://iiif.archivelab.org/iiif/' . $postcard . '$0000/full/500,/0/default.jpg"' ?> class="postcard-image" /></a>
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
        <small>We do not use your or your friend's data in any way, and we will not share it.  We count the number of times our postcard sender is used, but that's it.  We're librarians: your privacy is fundamental to our vocation.</small>
    </div>
    
</body>
</html>
