<?php

session_start();
$error = false;
if(isset($_SESSION["user"])){
    header('Location: http://localhost/poolparty/homework/homepage/mhw3.php');
    exit;
}
$connection = mysqli_connect("localhost", "homework", "homework", "poolparty");
if (mysqli_connect_errno())
  {
  echo json_encode("Failed to connect to MySQL: " ) . mysqli_connect_error();

}

if(isset($_POST["user"]) && isset($_POST["pass"])){
    $user = mysqli_real_escape_string($connection, $_POST["user"]);
    $pass = mysqli_real_escape_string($connection, $_POST["pass"]);
    
   
    $query = "SELECT * FROM utenti WHERE user = '".$user."'";
    $res = mysqli_query($connection, $query);
    $row = mysqli_fetch_assoc($res);
    
    
    if(password_verify($pass, $row["pass"])){
        $_SESSION["user"] = $row["user"];
        header('Location: http://localhost/poolparty/homework/homepage/mhw3.php');
        mysqli_free_result($res);
        mysqli_close($connection);
        exit;
    }
    
    $error = true;
    mysqli_free_result($res);
    mysqli_close($connection);  
}


if(isset($_POST["nuser"]) && isset($_POST["npass"])){

    $user = mysqli_real_escape_string($connection, $_POST["nuser"]);
    $pass = mysqli_real_escape_string($connection, $_POST["npass"]);
    $pass = password_hash($pass, PASSWORD_BCRYPT);
    $query = "SELECT * FROM utenti WHERE user = '".$user."'";
    $res = mysqli_query($connection, $query);
    if(mysqli_num_rows($res) == 0){
        //vuol dire che non esiste l'utente.
        //dunque lo inserisco

        mysqli_free_result($res);
        $query = "INSERT INTO utenti(user, pass) values ('".$user."','".$pass."')";
        $resu =  mysqli_query($connection, $query);
        if($resu){
            //utente registrato
            //mostro che si è registrato.
            $error = false;
            mysqli_close($connection);
            echo json_encode(true);
            exit;
        }
        
    }else{
        mysqli_free_result($res);
        mysqli_close($connection);

       $error = false;
        echo json_encode(false);
        exit;
    }
        $error = false;
        echo json_encode(false);
        exit;
   }



?>

<!DOCTYPE html>
<html>
<link rel="stylesheet" href="page_login_style.css">
<link rel="preconnect" href="https://fonts.gstatic.com"> 
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Unicase:wght@300&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.gstatic.com"> 
<link href="https://fonts.googleapis.com/css2?family=Averia+Serif+Libre&display=swap" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="preconnect" href="https://fonts.gstatic.com"> 
<link href="https://fonts.googleapis.com/css2?family=Della+Respira&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.gstatic.com"> 
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300&display=swap" rel="stylesheet">

<script src="script/login.js" defer></script>
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
        <div class="codes"></div>


            <img src="immagini/logo.png">
            <div class="login"> 
                <span><h1>Effettua il login</h1></span>
                <form>
                    <label>Username <input type="text" name="user"></label>
                    <label>Password <input type="password" name="pass" ></label>
                    <label> &nbsp;<input type="submit" name="invia"></label>
                </form>
                
            </div>
            <p>Non hai un account? <button class="butregi">Registrati</button></p>

            <div class="register, hidden">
            <div><h1>Effettua la registrazione</h1></div>

                <form >
                    <label>Username <input type="text" name="nuser"></label>
                    <label>Password <input type="password" name="npass" ></label>
                    <label>Ripeti password <input type="password" name="rpass" ></label>

                    <label> &nbsp;<input type="submit" name="ninvia"></label>
                </form>

            </div>

          
            <div class="check, hidden">
            <h2>Password deve contenere</h2> 
            <p class="red">1) - Lunghezza minima 8 caratteri, massima 16 caratteri</p> 
            <p class="red">2) - Almeno un carattere maiuscolo</p> 
            <p class="red">3) - Le password non combaciano</p>
           </div>

           <p class="hidden">Hai un account? <button class="butlog">Login</button></p>

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