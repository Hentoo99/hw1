<?php 
    session_start();
    if(!isset($_SESSION["user"])){
        header("Location: http://localhost/poolparty/homework/accedi/page_login.php");
        exit;
    }
?>

<!DOCTYPE html>
<html>
<link rel="stylesheet" href="page_istructors_style.css">
<link rel="preconnect" href="https://fonts.gstatic.com"> 
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Unicase:wght@300&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.gstatic.com"> 
<link href="https://fonts.googleapis.com/css2?family=Averia+Serif+Libre&display=swap" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="preconnect" href="https://fonts.gstatic.com"> 
<link href="https://fonts.googleapis.com/css2?family=Della+Respira&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.gstatic.com"> 
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300&display=swap" rel="stylesheet">

<link rel="preconnect" href="https://fonts.gstatic.com"> 
<link href="https://fonts.googleapis.com/css2?family=ZCOOL+QingKe+HuangYou&display=swap" rel="stylesheet">

<script src="javascript/loading_istructors.js" defer></script>
<script src="javascript/nav.js" defer></script>

<head>
        <title>PoolParty</title>
    </head>

    <body >
        <div class="post">
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
        <h1>Scopri i nostri istruttori!</h1>
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