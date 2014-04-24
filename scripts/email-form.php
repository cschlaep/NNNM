<?php

  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  $email_from = 'nearlynaked@mit.edu';
  $email_subject = "New message from NNNM: $subject";
  $email_body = "$name sent you the following message:\n $message"

  $to = 'nearlynaked@mit.edu';
  $headers = "From: $email_from \r\n";


  mail($to, $email_subject, $email_body, $headers);

?>