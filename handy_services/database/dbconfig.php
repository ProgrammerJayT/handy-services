<?php
$CN=mysqli_connect("localhost", "root", "");
$DB=mysql_select_db($CN, "handservices");

$FeedbackNo=$_POST['FeedbackNo'];
$FeedbackDate=$_POST['FeedbackDate'];
$FeedbackTime=$_POST['FeedbackTime'];
$FeedbackData=$_POST['FeedbackData'];
$ProviderID=$_POST['ProviderID'];
$ServiceID=$_POST['ServiceID'];
$CustomerID=$_POST['CustomerID'];
?>