<html>
<head>
    <?php 
        $sendername = 'Nick';
        $postcardimage = 'http://iiif.archivelab.org/iiif/nby_LL5511$0000/full/400,/0/default.jpg';
        $postcardlink = 'http://iiif.archivelab.org/iiif/nby_LL5511$0000/full/400,/0/default.jpg';
        $recipientname = "Jen";
    ?>
<title><?php echo $sendername ?> sent you a postcard from the 
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
                <h1> <?php echo $sendername ?> has sent you a postcard!</h1>
            </td>
        </tr>
        <tr>
            <td class='image-td'>
                <a href='<?php echo $postcardlink ?>'>
                    <img src='<?php echo $postcardimage ?>' class='postcard-image' />
                </a>
            </td>
        </tr>
        <tr>
            <td class='greeting-container'>
                <table>
                    <tr>
                        <td class='greeting-p'>
                            <p><?php echo $messagetext ?></p>
                        </td>
                        <td>
                            <table>
                                <tr>
                                    <td class='addr-top-td'>
                                        <img class='addr-img' src='nps.png' />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <div class='addr-bottom-div'>
                                            <p><?php echo $recipientname ?></p>
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
            is entirely digitized, and available for sending!<br />This email was 
            sent by our <a href='newberry-postcards'>Postcard Sender</a>.  
            Feel free to explore,<br />and use the collection in ways no one 
            else has imagined!
        </p>
        <small>
            We do not use your or your friend's data in any way, and we will not share it.
            <br />
            We count the number of times our postcard sender is used, 
            but that's it.<br />
            We're librarians: your privacy is fundamental to our vocation.
        </small>
    </div>
</body>
</html>