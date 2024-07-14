<?php
$host = '127.0.0.1'; // Change this to your database host
$dbname = 'chat'; // Change this to your database name
$username = 'admin'; // Change this to your database username
$password = ''; // Change this to your database password

try {
    $db = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}
?>
