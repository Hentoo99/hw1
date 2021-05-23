<?php
    session_start();
    session_destroy();
    header("Location: http://localhost/poolparty/homework/accedi/page_login.php");
    exit;
?>