<?php
include_once 'dbh.inc.php';

$success = '';

$user_email ="";
if (isset($_POST['submit']))
{
    $user_email = $_POST['email'];
    $sql = "INSERT INTO emails (email) VALUES ('$user_email');";
    if(mysqli_query($conn, $sql))
    {
        //echo "<h1>success</h1>";
        $success = "Email collected successfully";
        header("Location: ../index.html");
    }else{
        echo "Error:" .sql . " ".mysqli_error($conn);
        header("Location: ../index.html");
    }
    mysqli_close($conn);
}

?>