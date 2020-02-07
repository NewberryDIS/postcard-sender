<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Newberry Postcard Sender</title>
    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="postcard.css">
    <script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossorigin="anonymous"></script>
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
        $rand = rand(0,count($randoms) - 1);
        $postcard = isset($_GET['id']) ? $_GET['id'] : $randoms[$rand][0];
        $page = isset($_GET['p']) ? $_GET['p'] : $randoms[$rand][1];
        $back = $page === "0" ? "1" : "0";
    ?>
    <script>
        var success = false;
        $(document).ready(function(){
            $('#sufail').click(function(e){
                e.stopPropagation()
            });
            $('#backbutton').click(function(e){
                e.stopPropagation()
                // console.log('go back'); 
                window.location.href = 'https://archive.org/details/<?php echo $postcard ?>/mode/1up';
            });
            $('.modal').click(function(e){
                $('.modal').hide();
            });
            $( "#phpform" ).submit(function( event ) {
                event.preventDefault();
                var form = $('#phpform').find("input");
                var serializedData = form.serialize();
                serializedData += '&id=<?php echo $postcard; ?>&p=<?php echo $page; ?>';
                serializedData += '&messagetext=' + $('#messagetext').val();
                    console.log(serializedData);
                $.post('jquemail.php', serializedData, function(data) {
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
            <a href="https://archive.org/details/<?php echo $postcard ?>/mode/1up">
                <img <?php echo 'src="http://iiif.archivelab.org/iiif/' . $postcard . '$' . $page . '/full/600,/0/default.jpg" title="' . $rand . '" ' ?> class="postcard-image" />
            </a>
        </div>
        <div class="back" style="background-image: url(<?php echo 'http://iiif.archivelab.org/iiif/' . $postcard . '$' . $back . '/full/500,/0/default.jpg'?>);">
            <form id="phpform" >
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
                    <button id="submitbutton" >Submit</button>
                </div>
            </form>
        </div>
    </div>
    <div class="modal" style="display: none;">
        <div id="sufail" >
            <h3 id="sufailtoptext"></h3>
            <p id="sufailbottomtext"></p>
            <ul>
                <li id="printsendername"></li>
                <li id="printsenderemail"></li>
                <li id="printrecipientname"></li>
                <li id="printrecipientemail"></li>
                <li id="printmessagetext"></li>
            </ul>
            <button id="backbutton">Go Back to the Postcard Collection</button>
        </div>
    </div>
</body>
</html>