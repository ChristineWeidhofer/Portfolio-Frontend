<?php

$name = $_GET["name"];
$email = $_GET["email"];
$msg = $_GET["msg"];

if(mail("info@christine-weidhofer.net","E-Mail from my Portfolio-Page".$email, $msg)) {
  echo "success";
}