<?php   
    session_start();  

    $connection = mysqli_connect("localhost", "homework", "homework", "poolparty");

    if(isset($_POST["nome"]) && isset($_POST["cognome"]) && isset($_POST["data"]) && isset($_POST["piscina"]) && isset($_POST["dataabb"])){
      $nome = mysqli_real_escape_string($connection, $_POST["nome"]);
      $cognome = mysqli_real_escape_string($connection, $_POST["cognome"]);
      $datanascita = $_POST["data"];
      $datainizio = $_POST["dataabb"];
      $user = $_SESSION["user"];
      $id_piscina = $_POST["piscina"];
      
      $query = "insert into cliente (Nome, Cognome, Data_nascita, inizio ,account_id, piscina_id) values('".$nome."', '".$cognome."', '".$datanascita."', '".$datainizio."','".$user."','".$id_piscina."')";
      $res = mysqli_query($connection, $query);
      mysqli_close($connection);
      echo json_encode($res);
      
    }else{
      echo json_encode(false);
    }
?>