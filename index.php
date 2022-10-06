<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Newberry Postcard Sender</title>
    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="index.css">
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

            // non-holiday: 
        //  ['nby_6BH381', '1'],
        //  ['nby_LL11784', '0'],
        //  ['nby_LL12011', '0'],
        //  ['nby_LL10864', '0'],
        //  ['nby_0BH1419', '1'],
        //  ['nby_1BH1502', '1']
            // valentines: 
            //
            // ['nby_g4497z','1'],
            // ['nby_jm943z','0'],
            // ['nby_LL11019','0'],
            // ['nby_LL11611','0'],
            // ['nby_LL11603','0'],
            // ['nby_jm1020z','0'],
            // ['nby_jm1021z','0'],
            // ['nby_jm1025z','0'],
            // ['nby_LL11609', '0'],
            // ['nby_LL11733', '0'],
            // ['nby_LL358', '0'],
            // ['nby_LL12311', '0'],
            // ['nby_3BH352', '0'],
            // ['nby_LL13508', '0'],
            // ['Bossier_000663_01', '0'],
            // ['Bossier_000376_01', '0'],
            // ['Bossier_000119_01', '0'],
            // ['Bossier_000345_01', '0'],
            // ['Bossier_001178_01', '0'],
            // ['Bossier_000795_01', '0']
            //
            // // halloween
        // ['jm0972','0'],
        // ['jm0974','0'],
        // ['jm0976','0'],
        // ['jm0978','0'],
        // ['jm0979','0'],
        // ['jm1051','0'],
        // ['jm1054','0'],
        // ['jm0969','0'],
        // ['jm0970','0'],
        // ['jm0971','0'],
        // ['g4493','0']
            // thanksgiving
            // ['g9055','0'],
            // ['g9024','0'],
            // ['g1469','0'],
            // ['jm1067','0'],
            // ['jm987','0'],
            // ['jm1064','0'],
            // ['jm986','0'],
            // ['jm1066','0'],
            // ['jm980','0'],
            // ['nby_LL13737','0'],
            // ['nby_LL14020','0'],
            // ['nby_LL13700','0'],
            // ['nby_LL11644','0']
            // // xmas
            // ['jm992','0'],
            // ['g9052','0'],
            // ['nby_LL11946','0'],
            // ['nby_LL11686','0'],
            // ['nby_LL11895','0'],
            // ['nby_LL9454','0'],
            // ['nby_LL10469','0'],
            // ['nby_LL12158','0']
            // easter
        ['g4494','0'],
        ['jm961','0'],
        ['jm1271','0'],
        ['nby_LL13996','0'],
        ['nby_LL13707','0'],
        ['nby_LL9992','0'],
        ['nby_LL12221','0'],
        ['nby_LL13182','0'],
        ['nby_LL13161','0'],
        ['nby_LL13173','0'],
        ['nby_LL11690','0'],
        ['nby_LL2179','0']
            // 4th july
        //    ['g1467', '0'],
        //    ['g4502', '0'],
        //    ['g4503', '0'],
        //    ['g4504', '0'],
        //    ['nby_2BH729','1'],
        //    ['nby_1BH17','1'],
        // st pat's
        // ['nbyjm1035'],
        // ['jm944'],
        // ['nbyjm948'],
        // ['nbyjm966'],
        // ['jm1034'],
        // ['g1426'],
        // ['jm947']

        ];
	$rand = rand(0,count($randoms) - 1);
        $postcard = isset($_GET['id']) ? $_GET['id'] : $randoms[$rand][0];
        // the oilettes (which start with nby_LL) are all backwards in the metadata, so we reverse them here
        if ( strpos($postcard, 'nby_LL12654') === 0 || strpos($postcard, 'nby_LL10541') === 0 ) {
            $recto = 2;
            $verso = 3;
        } elseif (strpos($postcard, 'BH') === 4 || strpos($postcard, 'nby_LL') === 0 || strpos($postcard, 'jm') === 0 || strpos($postcard, 'g') === 0 || strpos($postcard, 'nby_g') === 0 || strpos($postcard, 'nby_jm') === 0 || strpos($postcard, 'Bossier') === 0 || strpos($postcard, 'nbyjm') === 0 || strpos($postcard, 'nbym') === 0 || strpos($postcard, 'nbyg') === 0) {
            $recto = 0;
            $verso = 1;
        } else {
            $recto = 1;
            $verso = 0;
        }
        echo "<script>var fresh = " . json_encode(!isset($_GET['p']), JSON_HEX_TAG) . ";</script>";
    ?>
	<script>
        var bgarray = [
            ['nby_1BH1504','1'],
            ['nby_1BH2115','1'],
            ['nby_1BH2128','1'],
            ['nby_VO184','1']
        ]
        var rando = Math.round(Math.random() * (bgarray.length - 1))
        var randoUrl = 'url("https://iiif.archivelab.org/iiif/' + bgarray[rando][0] + `$` + bgarray[rando][1] + '/full/1000,/0/default.jpg")'
    
        var success = false;
        var randoms = <?php echo json_encode($randoms); ?>;
        var current = <?php echo json_encode($postcard); ?>;
        function anotherCard(type){
            array = type === 'other' ? sampleSet : randoms;
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
		$(".bodyclass").css("background", randoUrl).css('background-size', 'cover').css('background-position', '50% 50%');	
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
		serializedData += "&id=<?php echo $postcard .'&p=' . $recto;?>";
                serializedData += '&messagetext=' + $('#messagetext').val();
                    console.log(serializedData);
                $.post('email.php', serializedData, function(data) {
                    console.log(data);
                })
                .done(function(data){
                    success = true;
		    console.log('sent');   
                    $('#sufailtoptext').text('Sent! A copy has also been sent to you.');
                }, "json")
                .fail(function(){
                    success = false;
                    console.log("emailer has failed.");
                    $('#sufailtoptext').text('Message wasn\'t sent.');
                }, "json");
                $('.modal').show();
                $('#printsendername').text('Sender\'s Name: ' + $('#sendername').val());
                $('#printsenderemail').text('Sender\'s Email: ' + $('#senderemail').val());
                $('#printrecipientname').text('Recipient\'s Name: ' + $('#recipientname').val());
                $('#printrecipientemail').text('Recipient\'s Email: ' + $('#recipientemail').val());
                $('#printmessagetext').text('Message Text: ' + $('#messagetext').val());
            });
            $('#holidaycard').click(function(){
                anotherCard('valen');
            });
            $('#othercard').click(function(){
                anotherCard('other');
            });
	});
    </script>
</head>
<body class="bodyclass">
    <header>
        <div class="headerwrapper">
            <div class="headerleft">
                <img src="logo.svg" alt="Newberry Logo">
                <a href="/postcard-sender/">
                    <div class="innerwrapper">
                        <h1>
                            Newberry Postcard Sender
                        </h1>
                        <h2>
                            Send a postcard to a friend!
                        </h2>
                    </div>
                </a>
            </div>
            <!-- <div class="headerright">
                <a href="https://archive.org/details/<?php echo $postcard ?>/mode/1up">
                    <p class="headermedium">
                        Postcard Page

                    </p>
                    <p class="headersmall">
                        at the Internet Archive
                    </p>
                </a>
            </div> -->
        </div>
    </header>
    <div class="container">
        <div class="image">
            <a href="https://archive.org/details/<?php echo $postcard ?>/mode/1up" id="cardLink">
                <img <?php echo 'src="https://iiif.archivelab.org/iiif/' . $postcard . '$' . $recto . '/full/600,/0/default.jpg" title="' . $rand . '" ' ?> id="cardFrontImg" class="postcard-image" />
            </a>
        </div>
        <div class="verso" style="background-image: url(<?php echo 'https://iiif.archivelab.org/iiif/' . $postcard . '$' . $verso . '/full/500,/0/default.jpg'?>);" id="cardVersoImg">
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
        <!-- <button class="cardsbutton" id="othercard">Random Postcard</button> -->
        <!-- <button class="cardsbutton" id="holidaycard">Random Valentine's Day Postcard</button>  -->
        <!-- <button class="cardsbutton" id="holidaycard">Random St Patrick's Day Postcard</button> -->
        <button class="cardsbutton" id="holidaycard">Random Easter Postcard</button> 
        <!-- <button class="cardsbutton" id="holidaycard">Random 4th of July Postcard</button> -->
        <!-- <button class="cardsbutton" id="holidaycard">Random Halloween Postcard</button>  -->
        <!-- <button class="cardsbutton" id="holidaycard">Random Thanksgiving Postcard</button> -->
        <!-- <button class="cardsbutton" id="holidaycard">Random Holiday Postcard</button> -->
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
