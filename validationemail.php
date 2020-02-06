<?php 
// NOT BEING USED   
$postcardimage = 'http://iiif.archivelab.org/iiif/nby_LL13508$0/full/400,/0/default.jpg';
$postcardlink = 'https://archive.org/details/nby_LL13508/mode/1up';
$recipientemail = 'jonny@jon.com';
$recipientname = 'Jon';
$sendername = 'Jen';
$senderemail = 'jenny@jen.com';
echo '<style>
    table {
        margin: auto;
        border: 2px solid rgba(37,37,37,1);
    }
    img {
        height: 50vh;
        padding-right: 20px;
    }
    td {
        padding: 10px 20px;
    }
    h1 {
        margin: 0;
    }
    .rightdp {
        display: inline-block;
        width: 100%;
        text-align: center;
    }
    a.button {
        width: auto;
        margin: auto;
        text-decoration: none;
        border-radius: 6px;
        // height: 40px;
        padding: 10px;
        border: 1px solid rgba(37,37,37,1);
        background: rgba(37,37,37,1);
        color: rgba(218,218,218,1);
    }
    a.button:hover {
        color: rgba(37,37,37,1);
        background: rgba(218,218,218,1);
    }
</style>
<table>
    <tr>
        <td colspan=2>
            <h1>Newberry Postcard Sender</h1>
        </td>
    </tr>
    <tr>
        <td colspan=2>
            <p>You\'re receiving this email because this address was added as the sender at Newberry Postcard Sender.<br />If you didn\'t request a digital postcard, please feel free to ignore this message.</p>
        </td>
    </tr>
    <tr>
        <td class="leftd">
            <a href="' . $postcardlink . '">
                <img src="' . $postcardimage . '" class="postcard-image" />
            </a>
        </td>
        <td class="rightd" valign="top">
            <h2>Success!</h2>
            <p>To continue, and send this email to ' . $recipientname . ' at ' . $recipientemail . ', click the button below.</p>
            <p class="rightdp"><a class="button" href="">Send Postcard</a></p>
        </td>
    </tr>
</table>';


?>