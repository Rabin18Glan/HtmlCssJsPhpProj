<?php
session_start();

function isSessionActive(){
    return isset($_SESSION['username']) && isset($_SESSION['email']);
}

if(isset($_SESSION['username']) && isset($_SESSION['email'])) {
    $response = [
        'username' => $_SESSION['username'],
        'email' => $_SESSION['email']
    ];
    echo json_encode($response);
} else {
    echo json_encode(['error' => 'No session data found']);
}

