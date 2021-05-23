<?php 
    session_start();
    if(!isset($_SESSION["user"])){
        header("Location: http://localhost/poolparty/homework/accedi/page_login.php");
        exit;
    }
?>

<!DOCTYPE html>
<html>
<link rel="stylesheet" href="page_abbonati_style.css">
<link rel="preconnect" href="https://fonts.gstatic.com"> 
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Unicase:wght@300&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.gstatic.com"> 
<link href="https://fonts.googleapis.com/css2?family=Averia+Serif+Libre&display=swap" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="preconnect" href="https://fonts.gstatic.com"> 
<link href="https://fonts.googleapis.com/css2?family=Della+Respira&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.gstatic.com"> 
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300&display=swap" rel="stylesheet">

<script src="script/loading_pools.js" defer></script>
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
        <div class="status"></div>

        <h1>Entra a far parte della nostra famiglia!</h1>

            <div class="model">
                <div class="img">
                    <img src="immagini/logo.png">
                </div>
                <div class="abbonamento">

                <form>
                   <p>Nome</p>
                    <input type="text" name="nome"> 
                    <p>Cognome</p>
                    <input type="text" name="cognome"> 
                    
                        <p>Data di Nascita</p>
                        <input type="date" name="data"   min="1930-01-01"> <!-- DATA DI NASCITA--> 
                    
                       <p>Scegli la piscina</p>
                       <select name="piscina">
                    </select>
                    <p>Inizio abbonamento</p>
                    <input type="date" name=dataabb class="hidden">
                   <label><input type="submit"></label> 
                </form>
            </div>
            </div>
        </section>

        <footer>
            <span>
                <img class="profilo" src="immagini/me.png" style="width: 100px;">
                <p>Enricomaria Di Rosolini</p>
                <p>O46002098</p>
            </span>
        </footer>
            
    </body>
</html>