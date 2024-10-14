<!-- index.php -->
<?php
$page = isset($_GET['page']) ? $_GET['page'] : 'home';

switch ($page) {
    case 'alojamiento':
        include 'pages/alojamiento.php';
        break;
    case 'contacto':
        include 'pages/contacto.php';
        break;
    default:
        include 'pages/home.php';
        break;
}
?>