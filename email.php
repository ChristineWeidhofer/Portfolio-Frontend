<?php

$name = $_GET["name"];
$email = $_GET["email"];
$msg = $_GET["msg"];

if(mail("christine.weidhofer@icloud.com","E-Mail from my Portfolio-Page from ".$name, $email, $msg)) {
  echo "Your message was sent, I will get back to you as soon as possible!";
}