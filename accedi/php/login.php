<?php

session_start();
$error = false;
$connection = mysqli_connect("localhost", "homework", "homework", "poolparty");
if(isset($_SESSION["user"])){
    header('Location: http://localhost/poolparty/homework/homepage/mhw3.php');
    exit;
}
if (mysqli_connect_errno())
  {
  echo json_encode("Failed to connect to MySQL: " ) . mysqli_connect_error();

}
$result = false;

if(isset($_POST["user"]) && isset($_POST["pass"])){
    $user = mysqli_real_escape_string($connection, $_POST["user"]);
    $pass = mysqli_real_escape_string($connection, $_POST["pass"]);
    
   
    $query = "SELECT * FROM utenti WHERE user = '".$user."'";
    $res = mysqli_query($connection, $query);
    $row = mysqli_fetch_assoc($res);
    if(mysqli_num_rows($res) > 0){
        if(password_verify($pass, $row["pass"])){
            $_SESSION["user"] = $row["user"];
            //header('Location: http://localhost/poolparty/homework/homepage/mhw3.php');
          
          
            $result = true;

            //echo json_encode(true);
        }
    }else{
        $result = false;
//        echo json_encode(false);
    }

    mysqli_free_result($res);
    mysqli_close($connection);
    
  
}
echo json_encode($result);
?>