<?php
if($_POST) {
    $to = "test.test.test@gmail.com";
    $subject = "Message";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);
}
?>