

<?php



function send_email(){
$to = "jeril@jerilgkadavan.com";
$subject = "This is email from".$_POST['name'];
$message = "Message".$_POST['message'];
$headers = "email".$_POST['email'];


mail($to, $subject, $message, $headers);

echo "<script>window.top.location='http://jerilgkadavan.com/'</script>";

}

send_email();

?>