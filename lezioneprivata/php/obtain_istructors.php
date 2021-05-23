<?php

$connection = mysqli_connect("localhost", "homework", "homework", "poolparty");
$query = "SELECT * FROM istruttori_lavorano;";
$res = mysqli_query($connection, $query);

$array = array();
while($row =mysqli_fetch_assoc($res))
{
    $array[] = $row;
}
mysqli_free_result($res);
mysqli_close($connection);
echo json_encode($array);


?>