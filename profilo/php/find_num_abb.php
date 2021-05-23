<?php



session_start();
$connection = mysqli_connect("localhost", "homework", "homework", "poolparty");
$array = array();


$query = "call conta_abbonamenti('".$_SESSION["user"]."')";
  $res = mysqli_query($connection, $query);
  $row = mysqli_fetch_assoc($res);
  $array[] = $row;
  mysqli_free_result($res);

  echo json_encode($array);
?> 