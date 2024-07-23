<?php

//Creating Connection with Database
function connect()
{
    $conn = mysqli_connect('localhost','root','','chat');
if(!$conn){
    die("Could not connect to database".mysqli_connect_error());

}

return $conn;
}