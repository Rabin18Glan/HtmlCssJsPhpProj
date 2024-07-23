<?php
session_start(); // Start a session

require_once '../../../dbConfig.php'; // Include the database configuration

// Extract session email
$session_email = $_SESSION['email'];

// Establish database connection
$conn = connect(); // Assuming connect() is a function that returns a connection

header('Content-Type: application/json'); // Set content type to JSON

// Prepare and execute the SQL query
$sql = $conn->prepare("SELECT id, username, email FROM user WHERE email != ?");
$sql->bind_param("s", $session_email);
$sql->execute();
$result = $sql->get_result();

// Check if any records were found
if ($result->num_rows > 0) {
    $users = [];
    while ($row = $result->fetch_assoc()) {
        $users[] = $row; // Collect all users in an array
    }
    echo json_encode([
        'status' => 'success',
        'message' => 'Users fetched successfully',
        'users' => $users
    ]);
} else {
    echo json_encode([
        'status' => 'error',
        'message' => 'No users found'
    ]);
}

// Close the connection
$conn->close();
