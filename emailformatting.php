<?php

$recipientname = 'jen';
$messagetext = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa amet accusamus reprehenderit totam architecto. Molestias id necessitatibus, itaque, consequuntur illo eveniet quibusdam voluptas pariatur cupiditate ad quis reprehenderit temporibus? Porro!';
$sendername = 'jen';
$postcardlink = 'jen';

$postcard = 'nby_LL5283';
$postcardimage = 'https://iiif.archivelab.org/iiif/nby_LL5283$0/full/400,/0/default.jpg';
$postcardback = 'https://iiif.archivelab.org/iiif/nby_LL5283$1/full/400,/0/default.jpg';
$postcardlink = 'https://archive.org/details/nby_LL5282/mode/1up';

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
        .headerimg {
            padding: 4px 0 0 4px;
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
                <a href='https://archive.org/details/" . $postcard . "/mode/1up' id='cardLink'>
                    <img src='" . $postcardimage . "' class='postcard-image' alt=''>
                </a>
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
    echo $message;
    ?>