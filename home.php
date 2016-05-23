<?php //comprueba que la session este iniciada
if (session_status() !== PHP_SESSION_ACTIVE) {
    session_start();
}
//verifica si el usuario esta logueado
if ($_SESSION['signUp'] != 1) {
    header("Location: index.php");
}; ?>
<!DOCTYPE html>
<html lang="en" spellcheck="true">
<head>
    <meta charset="utf-8">
    <title>The Escape</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="logo.ico"/>
    <?php include 'head.php' ?>`

</head>
<body>
<?php include 'menu.php'; ?>
<!-- SEARCH -->
<div class="container">
    <?php include 'search.php'; ?>
</div>
<!-- END SEARCH -->

<!--FOOTER-->
<footer class="footer center">
    <?php include 'footer.php'; ?>
</footer>
</body>
</html>
