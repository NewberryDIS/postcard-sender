<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Newberry Postcard Sender</title>
    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="postcard.css">
    <link rel="shortcut icon" href="newvicon.png" type="image/png">
    <link rel="apple-touch-icon" href="newvicon.png">
    <script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossorigin="anonymous"></script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-158122425-1"></script>
    <script src="sampleset.js"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-158122425-1');
    </script>

    <?php 
        $randoms = [
            // valentines: 
            // ['nby_LL11609', '0'],
            // ['nby_LL11733', '0'],
            // ['nby_LL358', '0'],
            // ['nby_LL12311', '0'],
            // ['nby_3BH352', '0'],
            // ['nby_LL13508', '0'],
            // after valentines: 
            ['nby_6BH381', '1'],
            ['nby_LL11784', '0'],
            ['nby_LL12011', '0'],
            ['nby_LL10864', '0'],
            ['nby_0BH1419', '1'],
            ['nby_1BH1502', '1']
        ];
        $rand = rand(0,count($randoms) - 1);
        $postcard = isset($_GET['id']) ? $_GET['id'] : $randoms[$rand][0];
        // the oilettes (which start with nby_LL) are all backwards in the metadata, so we reverse them here
        $isLL = strpos($postcard, 'nby_LL') === 0 ? true : false ;
        $recto = $isLL ? '0' : '1';
        $verso = $isLL ? '1' : '0';
        // $recto = '0';
        // $verso = '1';
        // $recto = isset($_GET['p']) ? $_GET['p'] : $randoms[$rand][1];
        // $verso = $recto === "0" ? "1" : "0";
        // if &p isn't set, we'll call it fresh, so the next sample/next valentine card button will appear
        echo "<script>var fresh = " . json_encode(!isset($_GET['p']), JSON_HEX_TAG) . ";</script>";
    ?>
    <script>
        var success = false;
        var randoms = <?php echo json_encode($randoms); ?>;
        var current = <?php echo json_encode($postcard); ?>;
        function anotherCard(type){
            array = type === 'valen' ? randoms : sampleSet;
            // https://stackoverflow.com/questions/44553426/find-the-index-of-a-sub-array-that-contains-a-number
            var currCard = array.findIndex(function(sub) {
                return sub.indexOf(current) !== -1;
            });
            // if current card is less than 1 (wasnt found in selected array), or if its the last card in the array, then set it to 0, otherwise, add 1
            currCard = (currCard < 0 || currCard >= ( array.length - 1)) ? 0 : currCard + 1;
            // console.log(currCard);
            // ?id=nby_LL8252&p=0
            window.location.href = 'index.php?id=' + array[currCard][0] + '&p=' + array[currCard][1]
        }
        $(document).ready(function(){
            $('#sufail').click(function(e){
                e.stopPropagation()
            });
            $('#backbutton').click(function(e){
                e.stopPropagation()
                window.location.href = 'https://archive.org/details/<?php echo $postcard ?>/mode/1up';
            });
            $('.modal').click(function(){
                $('.modal').hide();
            });
            $('#closebutton').click(function(){
                $('.modal').hide();
            });
            $( "#phpform" ).submit(function( event ) {
                event.preventDefault();
                var form = $('#phpform').find("input");
                var serializedData = form.serialize();
                serializedData += '&id=<?php echo $postcard; ?>&p=0';
                serializedData += '&messagetext=' + $('#messagetext').val();
                    console.log(serializedData);
                $.post('email.php', serializedData, function(data) {
                    console.log(data);
                })
                .done(function(data){
                    success = true;
                    var content = $.parseJSON(data);
                    $('#sufailtoptext').text(content.toptext);
                    $('#sufailbottomtext').text(content.bottomtext);
                }, "json")
                .fail(function(){
                    success = false;
                    console.log(success);
                    $('#sufailtoptext').text(content.toptext);
                    $('#sufailbottomtext').text(content.bottomtext);
                }, "json");
                $('.modal').show();
                $('#printsendername').text('Sender\'s Name: ' + $('#sendername').val());
                $('#printsenderemail').text('Sender\'s Email: ' + $('#senderemail').val());
                $('#printrecipientname').text('Recipient\'s Name: ' + $('#recipientname').val());
                $('#printrecipientemail').text('Recipient\'s Email: ' + $('#recipientemail').val());
                $('#printmessagetext').text('Message Text: ' + $('#messagetext').val());
            });
            $('#valencard').click(function(){
                anotherCard('valen');
            });
            $('#othercard').click(function(){
                anotherCard('other');
            });
        });  
    </script>
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
            <a href="https://archive.org/details/<?php echo $postcard ?>/mode/1up" id="cardLink">
                <img <?php echo 'src="http://iiif.archivelab.org/iiif/' . $postcard . '$' . $recto . '/full/600,/0/default.jpg" title="' . $rand . '" ' ?> id="cardFrontImg" class="postcard-image" />
            </a>
        </div>
        <div class="verso" style="background-image: url(<?php echo 'http://iiif.archivelab.org/iiif/' . $postcard . '$' . $verso . '/full/500,/0/default.jpg'?>);" id="cardVersoImg">
            <form id="phpform" >
                <div class="addresswrapper">
                    <div class="leftwrite">
                        <div class="sectionleft">
                            <p class="inputs">Your message: <br /><textarea rows="4" class="input messageinput" type="text" name="messagetext" id="messagetext"></textarea></p>
                            <p class="inputs">Your name: <br /><input class="input" type="text" name="sendername" id="sendername"></p>
                            <p class="inputs">Your E-mail: <br /><input class="input" type="text" name="senderemail" id="senderemail"></p>
                            <p class="postscript">p.s. View thousands more images from the <a href='https://archive.org/details/newberrypostcards' >Newberry Postcards digital collection</a>  & use the Sender link below any image to email it to a friend</p>
                        </div>
                        <div class="sectionright">
                            <p>Your friend's name: <br /><input class="input" type="text" name="recipientname" id="recipientname"></p>
                            <p>Your friend's E-mail: <br /><input class="input" type="text" name="recipientemail" id="recipientemail"></p>
                        </div>
                    </div>
                </div>
                <div class="sectionbottom">
                    <button class="cardsbutton" id="submitbutton" >Submit</button>
                </div>
            </form>
        </div>
    </div>
    <footer class="morestrip">
        <!-- <button class="cardsbutton" id="valencard">Random Valentine's Day Postcard</button> -->
        <button class="cardsbutton" id="othercard">Random Postcard</button>
    </footer>
    <div class="modal" style="display: none;">
        <div id="sufail" >
            <h3 id="sufailtoptext">Sending...</h3>
            <p id="sufailbottomtext"></p>
            <ul>
                <li id="printmessagetext"></li>
                <li id="printsendername"></li>
                <li id="printsenderemail"></li>
                <li id="printrecipientname"></li>
                <li id="printrecipientemail"></li>
            </ul>
            <div class="buttonbox">
                <button class="cardsbutton" id="closebutton">Go Back to Form</button>
                <button class="cardsbutton" id="backbutton">Go Back to the Postcard Collection</button>
            </div> 
        </div>
    </div>
</body>
</html>