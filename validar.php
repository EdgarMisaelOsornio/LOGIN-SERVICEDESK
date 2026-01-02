<?php
session_start();

$usuarios = [
    "admin" => "123456",
    "soporte" => "desk2025"
];

$usuario = $_POST['usuario'];
$password = $_POST['password'];

if (isset($usuarios[$usuario]) && $usuarios[$usuario] === $password) {
    $_SESSION['usuario'] = $usuario;
    header("Location: index.php");
    exit;
}

echo "Acceso denegado";
?>
