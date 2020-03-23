<?php


$config = require_once '/var/www/test.local/public_html/Message/Config/config.php';

$dsn = 'mysql:host:host='.$config['host'] . ';dbname='.$config['db_name'].';';

$db = new PDO($dsn,  $config['username'], $config['password']);

try {
    $db->exec('CREATE TABLE mytable4 (id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, 
name  varCHAR(30) NOT NULL,
text VARCHAR(100),
image BLOB NOT NULL)');
} catch (PDOException $e) {
    die("Error 4D : " . $e->getMessage());
}



