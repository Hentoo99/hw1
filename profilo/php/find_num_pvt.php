<?php

session_start();
$connection = mysqli_connect("localhost", "homework", "homework", "poolparty");
$array = array();

  //mi conto il numero di lezioni private effettuate
  $query = "SELECT COUNT(*) as num_lezioni_pvt FROM `archivio_lezioni_private` where user = '".$_SESSION["user"]."' group by user ";
  $res = mysqli_query($connection, $query);
  $row = mysqli_fetch_assoc($res);
  $array[] = $row;
  mysqli_free_result($res);
  
  echo json_encode($array);
?>