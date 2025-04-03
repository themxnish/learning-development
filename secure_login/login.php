<?php
session_start();
require 'config.php';

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = htmlspecialchars($_POST["username"], ENT_QUOTES, 'UTF-8');
    $password = $_POST['password'];

    $stmt = $pdo->prepare("SELECT id, password FROM users WHERE username = :username");
    $stmt->bindParam(':username', $username, PDO::PARAM_STR);
    $stmt->execute();

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user["password"])) {
        session_start();
        $_SESSION["user_id"] = $user["id"];
        header("Location: dashboard.php");
        exit();
    } else {
        echo "Invalid credentials.";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <form method="post">
        <h2>Login</h2>
        <input type="text" name="username" placeholder="Username" required>
        <input type="password" name="password" placeholder="Password" required>
        <button type="submit">Login</button>
    </form>
</body>
</html>