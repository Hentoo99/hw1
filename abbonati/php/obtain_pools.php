<?php 
    $connection = mysqli_connect("localhost", "homework", "homework", "poolparty");
    if (mysqli_connect_errno())
  {
  echo json_encode("Failed to connect to MySQL: " ) . mysqli_connect_error();}
  
  $query = "SELECT * from piscina_aziendale";
  $res = mysqli_query($connection, $query) or die();
  
  $piscina = array();

  while($row = mysqli_fetch_assoc($res)){
        $piscina[] = $row;
  }

  echo json_encode($piscina);


?>