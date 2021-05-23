<?php
    $connection = mysqli_connect("localhost", "homework", "homework", "poolparty");
    //prima del cambiamento
    //$query = "select istruttore.nome as Nome, cognome as Cognome, descrizione, piscina_aziendale.Nome as Nome_piscina from istruttore join piscina_aziendale on istruttore.id_piscina = piscina_aziendale.ID ORDER BY istruttore.ID";
    $query = "SELECT * FROM istruttori_lavorano";
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