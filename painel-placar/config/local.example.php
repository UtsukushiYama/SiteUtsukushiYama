<?php
// Copie para local.php e preencha os dois blocos uma única vez. Nunca envie local.php ao GitHub.
require_once __DIR__ . '/environment.php';
$environment = detectPanelEnvironment($_SERVER, PHP_SAPI, getenv('PP_ENV'));

$databases = [
    'development' => [
        'host' => '127.0.0.1',
        'port' => 3306,
        'database' => 'uy_db',
        'username' => 'YOUR_LOCAL_DATABASE_USERNAME',
        'password' => 'YOUR_LOCAL_DATABASE_PASSWORD',
    ],
    'production' => [
        'host' => 'YOUR_INFINITYFREE_MYSQL_HOST',
        'port' => 3306,
        'database' => 'YOUR_INFINITYFREE_DATABASE_NAME',
        'username' => 'YOUR_INFINITYFREE_DATABASE_USERNAME',
        'password' => 'YOUR_INFINITYFREE_DATABASE_PASSWORD',
    ],
];

return $databases[$environment];
