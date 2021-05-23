<?php
        session_start();
        $connection = mysqli_connect("localhost", "homework", "homework", "poolparty");
        
        //controllo se l'utente ha registrato una piscina
        $query = "SELECT * FROM cliente WHERE account_id = '".$_SESSION["user"]."'";
        $array = array();
        $res = mysqli_query($connection, $query);
        $row = mysqli_fetch_assoc($res);
        $array[] = $row;
        
        if(mysqli_num_rows($res) >0){
            //ho trovato una riga
             //mi prendo le informazioni della piscina
             $query = "select * from piscina_aziendale join luogo on piscina_aziendale.ID_citta = luogo.ID where piscina_aziendale.ID = '".$array[0]["piscina_id"]."' ";
             $res = mysqli_query($connection, $query);
             $row = mysqli_fetch_assoc($res);
             $array[] = $row;
             mysqli_free_result($res);
            
           
             echo json_encode($array);
           
           
            

        }else{
            //non ho trovato nessuna riga
            //mostro le informazioni dell'utente durante la registrazione nel sito!
            $user = $_SESSION["user"];
            echo json_encode($user);
        }

        
?>