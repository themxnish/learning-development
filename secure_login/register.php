<?php
require 'config.php';

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = htmlspecialchars($_POST["username"], ENT_QUOTES, 'UTF-8');
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

    $stmt = $pdo->prepare("INSERT INTO users (username, password) VALUES (:username, :password)");
    $stmt->bindParam(':username', $username, PDO::PARAM_STR);
    $stmt->bindParam(':password', $password, PDO::PARAM_STR);
    
    if ($stmt->execute()) {
        echo "User registered successfully!";
    } else {
        echo "Registration failed!";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Register</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <form method = "post">
        <h2>Register</h2>
        <input type="text" name="username" placeholder="Username" required>
        <input type="password" name="password" placeholder="Password" required>
        <button type="submit">Register</button>
    </form>
</body>
</html>  