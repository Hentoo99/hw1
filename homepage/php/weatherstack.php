<?php

    $access_key = "ea3cd4a9d23877146e336b46928958c2";
    $url = "http://api.weatherstack.com/current?access_key=" .$access_key."&query=".$_GET["query"]."";

    $curl = curl_init(); 
    curl_setopt($curl, CURLOPT_URL,$url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($curl);
    curl_close($curl);
    print_r($result);

?>