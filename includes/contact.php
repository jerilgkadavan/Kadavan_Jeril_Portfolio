<?php
if (isset($_POST['submit'])) {
$name = $_POST['name'];
$mailFrom = $_POST['email'];
$message = $_POST['message'];

$mailTo = "jeril@jerilgkadavan.com";
$headers = "From: ".$mailFrom;
$txt = "You have recieved an e-mail from ".$name.".\n\n".$message;

mail($mailTo, $message, $txt, $headers);
header("Location:includes/contact.php?status=successful");
}



// var_dump($_POST);

// $fields = array(
//   'name' => array(
//     'type' => 'text',
//     'label' => 'Name'
//   ),
//   'email' => array(
//     'type' => 'email',
//     'label' => 'Email'
//   ),
//   'message' => array(
//     'type' => 'textarea',
//     'label' => 'Message'
//   )
// );

function send_email() {


    if(empty($_POST['email'])){

      // CHANGE BELOW PATH TO contact.php ----> /week10/admin/scripts/ --- OK
        header("Location:includes/contact.php?status=error");
        exit();
    }
    if(!isset($_POST['message']) || !isset($_POST['email'])){

      // CHANGE BELOW PATH TO contact.php ----> /week10/admin/scripts/ --- OK
        header("Location:includes/contact.php");
        exit();
    }
    $to = "jeril@jerilgkadavan.com"; //Hostpapa email
    $subject = "Portfolio";
    $message = 'Message Body:'.$_POST['message'];
    $header = "";
    $header .= "Reply-To:".$_POST['email'];


    if(mail($to, $subject, $message, $header)){

        // CHANGE BELOW PATH TO contact.php ----> /week10/admin/scripts/ --- OK
        header("Location:includes/contact.php?status=successful");
        exit();
    }

    var_dump($_POST); // to see whats being sent
  }

  send_email();



?>