
<?php
// require_once 'UserModel.php';

// Start session
// session_start();

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $email = $_POST['email'];
    $password = $_POST['password'];
echo 'hello '.$email;
//     // Include database connection
//     require_once 'db_connect.php';

//     // Include UserModel
//     require_once 'UserModel.php';

//     // Create UserModel object
//     $userModel = new UserModel($db);

//     // Get user data from database
//     $user = $userModel->getUser($username, $password);

//     // Check if user exists
//     if ($user) {
//         // User exists, set session variable and redirect
//         $_SESSION['user'] = $user;
//         header('Location: dashboard.php');
//         exit;
//     } else {
//         // User does not exist, show error message
//         $error = 'Invalid username or password';
//         include 'login_form.php';
//     }
// } else {
//     // Show login form
//     include 'login_form.php';
}
?>

