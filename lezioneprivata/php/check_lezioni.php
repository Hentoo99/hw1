<?php
    session_start();
    $connection = mysqli_connect("localhost", "homework", "homework", "poolparty");
    $user = $_SESSION["user"];
    $query = "select istruttori_lavorano.Nome, istruttori_lavorano.Cognome, istruttori_lavorano.Nome_piscina, lezione_privata.data
    from  istruttori_lavorano join lezione_privata 
    ON istruttori_lavorano.ID_istruttore = lezione_privata.ID_istruttore 
    and lezione_privata.ID_piscina = lezione_privata.ID_piscina 
    where user = '".$user."'
    order by lezione_privata.data";
    
    $res = mysqli_query($connection, $query);
    if(mysqli_num_rows($res) > 0){
        //prendo le informazioni necessarie
        $array = array();
        while($row = mysqli_fetch_assoc($res)){
            $array[] = $row;
        }
        mysqli_free_result($res);
        mysqli_close($connection);
        echo json_encode($array);        
    }else{
        echo json_encode(false);
    }
?>