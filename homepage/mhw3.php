<?php 
    session_start();
    if(!isset($_SESSION["user"])){
        header("Location: http://localhost/poolparty/homework/accedi/page_login.php");
        exit;
    }
?>
<!DOCTYPE html>
<html>
<link rel="stylesheet" href="mhw3.css">
<link rel="preconnect" href="https://fonts.gstatic.com"> 
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Unicase:wght@300&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.gstatic.com"> 
<link href="https://fonts.googleapis.com/css2?family=Averia+Serif+Libre&display=swap" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="preconnect" href="https://fonts.gstatic.com"> 
<link href="https://fonts.googleapis.com/css2?family=Della+Respira&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.gstatic.com"> 
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300&display=swap" rel="stylesheet">

<script src="contents.js"></script>
<script src="mhw3.js" defer></script>
<script src="script.js" defer></script>
<script src="script/nav.js" defer></script>

<head>
        <title>PoolParty</title>
    </head>

    <body >
        <div class="pos">
            <header>
                <div id="overlay">PoolParty
                    <div id="menuacomparsa">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </header>
            <nav>
            <div id="menu">
                    <a href="http://localhost/poolparty/homework/homepage/mhw3.php">Home</a>
                    <a href="http://localhost/poolparty/homework/profilo/page_profile.php">Profilo</a>
                    <a href="http://localhost/poolparty/homework/logout/logout.php">Logout</a>
                    <a href="http://localhost/poolparty/homework/istruttori/page_istructors.php">Istruttori</a>
                    <a href="http://localhost/poolparty/homework/findurpool/find_ur_pool.php">Trova la tua piscina</a>
                    <a href="http://localhost/poolparty/homework/abbonati/page_abbonati.php">Abbonati</a>
                    <a href="http://localhost/poolparty/homework/lezioneprivata/page_lezioneprivata.php">Lezione Privata</a>
                    <a href="http://localhost/poolparty/homework/chisiamo/page_description.php">Chi siamo</a>
                </div>
            </nav>
        </div>
        <section>
            <div id="api">
                <div class="spotify">
                    <div>
                        <img src="https://media.giphy.com/media/J5B1Y8QZnzXXbLQIBu/giphy.gif">
                        <h1>PoolPartyRadio</h1>
                    </div>
                    
                    <div class="button playlist">Playlist completa</div>  
                    <div class="button follow">Follow PoolParty</div>
                </div>
                <div class="meteo">
                    <div class="richiestameteo"> 
                        <img src="apilayer_icon_weatherstack.png">
                        <h1>Cerca la tua citta'</h1>
                    </div>
                    <div class="richiesta">
                        <input type="text" class="ricercameteo">
                        <input type="button" value="Cerca" class="Cerca">
                    </div>
                    <div class="citta">
                        
                    </div>
                </div>
                <section  class="sezionemodale">
                </section>
            </div>
        </section>
        <section id="article">
            <div id="barradiricerca">
                <div>
                    <span>Ricerca</span>
                    <input  type="text" class="ricerca"> 
                    <h1 class="hidden">Elementi trovati</h1>
                </div>
            </div>
            <div id="preferiti">
                <h1>Preferiti</h1>
            </div>
            <div class= "argument">
                <h1>Tutti</h1>
         
                
            </div>
        </section>
        <footer>
            <span>
                <img class="profilo" src="me.png" style="width: 100px;">
                <p>Enricomaria Di Rosolini</p>
                <p>O46002098</p>
            </span>
        </footer>
            
    </body>
</html>
