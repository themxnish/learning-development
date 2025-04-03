<?php 
session_start();
require 'config.php';

if(!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit();
}

$user_id = $_SESSION['user_id'];

$stmt = $pdo->prepare("SELECT username FROM users WHERE id = :id");
$stmt->bindParam(':id', $user_id, PDO::PARAM_INT);
$stmt->execute();

$user = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$user) {
    echo "Error : User not found.";
    exit();
}
$username = htmlspecialchars($user['username'], ENT_QUOTES, 'UTF-8');
?>

<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <h2>Welcome, <?php echo $username; ?>!</h2>
    <p>You are logged in.</p>
    <a href="logout.php">Logout</a>
</body>
</html>