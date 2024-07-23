<?php
session_start(); // Start a session at the beginning of the script

require_once '../../dbConfig.php';

// Extract POST variables
$email = $_POST['email'];
$password = $_POST['password'];

// Establish database connection
$conn = connect(); // Assuming connect() is a function in dbConfig.php that returns the connection

header('Content-Type: application/json'); // Set content type to JSON

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['status' => 'error', 'message' => 'Invalid email format']);
    exit; // Ensure no further code is executed
}

// Prepare and execute the SQL query to check if the user exists
$sql = $conn->prepare("SELECT * FROM user WHERE email = ?");
$sql->bind_param("s", $email);
$sql->execute();
$result = $sql->get_result();

// Fetch the first user data (assuming email is unique)
if ($result->num_rows > 0) {
    $user = $result->fetch_assoc(); // Fetch the first row

    // Verify password
    // $isverified = password_verify(trim($password), trim($user['password']));
    $isverified = $password == $user['password'];
    if ($isverified) {
        // Start session and store user data
        $_SESSION['username'] = $user['username'];
        $_SESSION['email'] = $user['email'];
        echo json_encode([
            'status' => 'success',
            'message' => 'Login successful',
            'user' => [
                'id'=>$user['id'],
                'email'=>$user['email'],
                'username'=>$user['username'],
            ]
        ]);
    } else {
        echo 'Stored  Hash: ' . $user['password']; // Output the stored hash
        echo 'Input Password: ' . $password;
        echo $isverified;
        echo json_encode(['status' => 'error', 'message' => 'Invalid password']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'No user found with this email'.$user['password']]);
}

$conn->close();
