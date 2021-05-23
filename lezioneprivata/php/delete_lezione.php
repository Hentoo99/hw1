<?php
         session_start();
         $connection = mysqli_connect("localhost", "homework", "homework", "poolparty");
         
         $user = $_SESSION["user"];
         if(isset($_POST["delete"])){
             $query = "DELETE FROM lezione_privata WHERE user = '".$user."' and data = '".$_POST["delete"]."'";
             mysqli_query($connection, $query);
             
             $query = "DELETE FROM archivio_lezioni_private WHERE user = '".$user."' and data = '".$_POST["delete"]."'";
             mysqli_query($connection, $query);
             
             echo json_encode(true);
        }else{
            echo json_encode(false);
        }
?>