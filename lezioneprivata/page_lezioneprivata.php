<?php
   session_start();
   if(!isset($_SESSION["user"])){
       header("Location: http://localhost/poolparty/homework/accedi/page_login.php");
       exit;
   }
?>


<!DOCTYPE html>
<html>
<link rel="stylesheet" href="page_lezioneprivata_style.css">
<link rel="preconnect" href="https://fonts.gstatic.com"> 
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Unicase:wght@300&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.gstatic.com"> 
<link href="https://fonts.googleapis.com/css2?family=Averia+Serif+Libre&display=swap" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="preconnect" href="https://fonts.gstatic.com"> 
<link href="https://fonts.googleapis.com/css2?family=Della+Respira&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.gstatic.com"> 
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300&display=swap" rel="stylesheet">

<script src="script/loading_istructors.js" defer></script>
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
        <div class="hidden"></div>
        <h1>Prenota una lezione privata!</h1>
        <div class="request">
        <form>
            <h1>Premi invio alla fine</h1>
           <div>
           <p>Inserisci Data: </p>
            <input type="date" name="data"> 
           </div> 
    

            <div>
            <p>Scegli una piscina:</p>
            <select name="piscina" onchange="onClick()"></select>
            </div>
            <div>
            <p> Scegli istruttore:</p>
            <select name="istruttore">
            </div>
            <input type="submit" name="invio" >
        </form>
        </div>
       </div>
       <div class="request">
        <h1>Seleziona la lezione da eliminare</h1>

            <form>
            <label> Elimina una lezione:             
                <select name="delete"></select>

                <input type="submit" name="elimina"></label> 

            </form>
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