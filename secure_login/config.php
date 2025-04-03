<?php
$host = 'localhost';
$dbname = 'secure_db';
$user = 'secure_user';
$password = 'secure_pass';

try {
    $pdo = new PDO("pgsql:host=$host;dbname=$dbname", $user, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false
    ]);
} catch (PDOException $e) {
    die("❌ Database connection failed: " . $e->getMessage());
}
?>
