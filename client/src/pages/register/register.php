<?php 
session_start(); // Start a session at the beginning of the script

require_once '../../dbConfig.php';
extract($_POST);

$conn = connect();
if(!($password == $confirm_password))
{
    echo "Password is incorrect";
    die;
}

if(!filter_var($email, FILTER_VALIDATE_EMAIL))
{
    echo "Email is invalid";
    die;
}

// Hash the password before storing it in the database
$hashed_password = password_hash($password, PASSWORD_BCRYPT);

// Inserting data
$sql = "INSERT INTO user (username, email, password) VALUES ('$username', '$email', '$password');";

if(mysqli_query($conn, $sql))
{
    // Start session and store user data
    $_SESSION['username'] = $username;
    $_SESSION['email'] = $email;
    echo "Successful";
}
else
{
    echo "Some error occurred: " . mysqli_error($conn);
}

mysqli_close($conn);
