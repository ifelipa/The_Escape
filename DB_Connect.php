<?php

define("DB", "ddr5uan4d6pssg");
define("USER", "itoldmzxnsrmzy");
define("PASS", "SWqBkbfQagjIRr5J4buWXoeB94");

/**
 * Funcion conectar()
 * Funcion que permite conectarse a la base de datos
 * @return resource
 */
function valid_connection()
{
    $strConn = "host=ec2-54-228-189-127.eu-west-1.compute.amazonaws.com
 dbname=" . DB . " user=" . USER . " password=" . PASS;
    return pg_connect($strConn);
}

/**
 * Funcion desconectar()
 * Funcion que libera el conjunto de resultados y cerramos la conexion
 * @param $query_result
 * @param $dbconn
 */
function close_connection($query_result, $dbconn)
{
    // Free resultset
    pg_free_result($query_result);
    // Closing connection
    pg_close($dbconn);
}

?>
