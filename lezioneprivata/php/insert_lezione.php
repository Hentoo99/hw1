<?php
    session_start();
    $connection = mysqli_connect("localhost", "homework", "homework", "poolparty");
    if(isset($_POST["data"]) && isset($_POST["piscina"])  && isset($_POST["istruttore"])){
        $user = $_SESSION["user"];
        $id_piscina = $_POST["piscina"];
        $id_istruttore = $_POST["istruttore"];
        $data = $_POST["data"];

        $query = "INSERT INTO lezione_privata(user,ID_istruttore, ID_piscina, data) 
        values ('".$user."', '".$id_istruttore."','".$id_piscina."','".$data."')";

        $res = mysqli_query($connection, $query);
        if($res){
            echo json_encode(true);
        }else{
            echo json_encode(false);
        }
        
    }else{
        echo json_encode(false);
    }

    
?>