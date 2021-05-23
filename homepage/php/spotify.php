<?php
    $client_id = '02fd1d8f64cf491d8c64adc76100e472';
    $client_secret = 'b54eb9427a9e4692acaf0291048e8c7a';

    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, 'https://accounts.spotify.com/api/token' );
    curl_setopt($curl, CURLOPT_RETURNTRANSFER,1);
    curl_setopt($curl, CURLOPT_POST,1);
    curl_setopt($curl, CURLOPT_POSTFIELDS, 'grant_type=client_credentials' ); 
    curl_setopt($curl, CURLOPT_HTTPHEADER, array('Authorization: Basic '.base64_encode($client_id.':'.$client_secret))); 
    
    $token=curl_exec($curl);
    curl_close($curl);
    echo $token;

   
?>