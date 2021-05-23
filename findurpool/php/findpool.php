<?php
    if(isset($_POST["citta"])){
        $connection = mysqli_connect("localhost", "homework", "homework", "poolparty");
        $city = mysqli_real_escape_string($connection, $_POST["citta"]);

        $query = "SELECT Nome, Citta, Via from piscina_aziendale p JOIN luogo l on l.ID = p.ID_citta where l.Citta = '".$city."'";
        $res = mysqli_query($connection, $query);
       
        $citta = array();
        while($row = mysqli_fetch_object($res)){
            $citta[] = $row;
        }
        mysqli_free_result($res);
        mysqli_close($connection);
        if(count($citta) != 0){
            echo json_encode($citta);
        }
    }
       
    
?>