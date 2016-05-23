<?php
set_include_path(get_include_path() . PATH_SEPARATOR . 'Google');
    
if (session_status() !== PHP_SESSION_ACTIVE) {
    session_start();
}
require_once 'Google/autoload.php'; // or wherever autoload.php is located
include_once("Google/Google_Client.php");
include_once("Google/contrib/Google_Oauth2Service.php");
require_once 'userFunctions.php';
// llamamos al archivo php donde estan las funciones que necesitaremos //

//Creando las claves de la conexion
$client_id = '142362909477-26b7r8fnsjrh02l2b4rot3l4api9dc49.apps.googleusercontent.com';
$client_secret = 'AoOy8WkacguJpZW2ibtljHKQ';
$redirect_uri = 'http://localhost/The_Escape/Logica/controllerGoogle.php';

//Crea la solicitud del cliente para acceder a la API de Google
$client = new Google_Client();
$client->setClientId($client_id);
$client->setClientSecret($client_secret);
$client->setRedirectUri($redirect_uri);

//Enviando la solicitud del cliente
$google_oauthV2 = new Google_Oauth2Service($client);

if (isset($_REQUEST['code'])) {
    $client->authenticate();
    $_SESSION['goID'] = $client->getAccessToken();
    header('Location: ' . filter_var($redirectUrl, FILTER_SANITIZE_URL));
}

if (isset($_SESSION['goID'])) {
    $client->setAccessToken($_SESSION['goID']);
}

if ($client->getAccessToken()) {
    $userProfile = $google_oauthV2->userinfo->get();
    $_SESSION['goID'] = $client->getAccessToken();
    $_SESSION['signUp'] = 1;
    $_SESSION['isAdmin'] = false;
    $usernameGoogle = strtolower($userProfile['given_name'] . "_google");
    $googleFirstName = $userProfile['given_name'];
    $googleLastName = $userProfile['family_name'];
    $googleEmail = $userProfile['email'];
    if (validateUsername($usernameGoogle)) {
        addUser($googleFirstName, $googleLastName, $usernameGoogle, $googleEmail, 'f', $usernameGoogle, '00000', '0000', 'x');
    }
    $_SESSION['username'] = $usernameGoogle;

    header("location: home.php");
} else {
    $authUrl = $client->createAuthUrl();
}

?>
