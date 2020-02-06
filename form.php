<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<?php
define("RECAPTCHA_V3_SECRET_KEY", getenv('PC_RECAPTCHA_PR_KEY'));

// variables 

$postcard = isset($_POST['id']) ? $_POST['id'] : $randoms[$rand][0];
$page = isset($_POST['p']) ? $_POST['p'] : $randoms[$rand][1];
$recipientname = $_POST['recipientname'];
$recipientemail = (IsClean($_POST['recipientemail'])) ? $_POST['recipientemail'] : sendError('re');
$sendername = $_POST['sendername'];
$senderemail = (IsClean($_POST['senderemail'])) ? $_POST['senderemail'] : sendError('se');
$messagetext = $_POST['messagetext'];
$psurl = "//publications.newberry.org/postcard-sender";
$to = $recipientemail;
$subject = $sendername . ' sent you a postcard from the Newberry Library!';

// PHP functions

function IsClean($str){
    $email_pattern = '/^[^@\s<&>]+@([-a-z0-9]+\.)+[a-z]{2,}$/i';
    if ((preg_match($email_pattern, $str) && ctype_print($str)) || strlen($str) === 0) {
        return true;
    } else {
        return false;
    }
}
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
    jqueryTheThings('success');
    // echo "Your email has been sent!  If you added your own address, you can expect to find it in your inbox.";
    // $title = 'Email sent!  Newberry Postcard Sender';
    // $button = "Send It Again";
    console_log('success');
}
function sendFailure(){
    jqueryTheThings('failure');
    // echo "Your email hasn't been sent.  Take a look at your info and try again.";
    // $title = 'Email didn\'t send';
    // $button = "Try Again";
    console_log('failure');
}
function jqueryTheThings($result){
    echo '<script>changeHeader(' . $result . ')</script>';
}
// recaptcha v3 stuff

    $token = $_POST['token'];
    $action = $_POST['action'];
    
    // call curl to POST request
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL,"https://www.google.com/recaptcha/api/siteverify");
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query(array('secret' => RECAPTCHA_V3_SECRET_KEY, 'response' => $token)));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);
    $arrResponse = json_decode($response, true);
    
    // verify the response
    if($arrResponse["success"] == '1' && $arrResponse["action"] == $action && $arrResponse["score"] >= 0.5) {
        mail($to, $subject, $message, $headers) ? sendSuccess() : sendFailure();
    } else {
        sendFailure();
}
?>
<script>    
// js functions
function changeHeader(v){
    var headertext = v === 'success' ? 'Your email has been sent!  If you added your own address, you can expect to find it in your inbox.' : 'Your email hasn\'t been sent.  Take a look at your info and try again.';
    $('#headertext').text(headertext);
}
</script>
<body>
    <h3 id="headertext"></h3><script></script>
</body>
</html>

<?php
  // $email;$comment;$captcha;
  // $senderemail = filter_input(INPUT_POST, 'senderemail', FILTER_VALIDATE_EMAIL);
  // $recipientemail = filter_input(INPUT_POST, 'recipientemail', FILTER_VALIDATE_EMAIL);
  // $messagetext = filter_input(INPUT_POST, 'messagetext', FILTER_SANITIZE_STRING);
  // $captcha = filter_input(INPUT_POST, 'token', FILTER_SANITIZE_STRING);
  // if(!$captcha){
  //   echo '<h2>Please check the the captcha form.</h2>';
  //   exit;
  // }
  // $secretKey = "process.env.localhostRecaptchaSecretKey";
  // $ip = $_SERVER['REMOTE_ADDR'];

  // // post request to server
  // $url = 'https://www.google.com/recaptcha/api/siteverify';
  // $data = array('secret' => $secretKey, 'response' => $captcha);

  // $options = array(
  //   'http' => array(
  //     'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
  //     'method'  => 'POST',
  //     'content' => http_build_query($data)
  //   )
  // );
  // $context  = stream_context_create($options);
  // $response = file_get_contents($url, false, $context);
  // $responseKeys = json_decode($response,true);
  // header('Content-type: application/json');
  // if($responseKeys["success"]) {
  //   echo json_encode(array('success' => 'true'));
  // } else {
  //   echo json_encode(array('success' => 'false'));
  // }
?>