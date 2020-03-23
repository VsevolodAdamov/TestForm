<?php

include '/var/www/test.local/public_html/index.php';
$param = json_decode($_REQUEST["param"]);
$dataform = ['name' => $param->name, 'text' => $param->text,  'image' => $param->image];
$db ->execute($dataform);




