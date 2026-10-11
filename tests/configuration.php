<?php
declare(strict_types=1);
if (PHP_SAPI !== 'cli') { http_response_code(403); exit; }
require_once __DIR__ . '/../config/environment.php';

$cases = [
    [['SERVER_ADDR'=>'127.0.0.1'], 'apache2handler', false, 'development'],
    [['SERVER_ADDR'=>'::1'], 'fpm-fcgi', false, 'development'],
    [['SERVER_NAME'=>'127.0.0.1', 'HTTP_HOST'=>'example.org'], 'cli-server', false, 'development'],
    // Neither a forged Host header nor SERVER_NAME selects local credentials on production Apache.
    [['SERVER_ADDR'=>'192.168.1.5', 'SERVER_NAME'=>'localhost', 'HTTP_HOST'=>'localhost'], 'apache2handler', false, 'production'],
    [[], 'fpm-fcgi', false, 'production'],
    [[], 'cli', false, 'development'],
    [[], 'cli', 'production', 'production'],
    [['SERVER_ADDR'=>'127.0.0.1'], 'apache2handler', 'production', 'production'],
    [['SERVER_ADDR'=>'192.168.1.5'], 'apache2handler', 'development', 'development'],
];
foreach ($cases as $case) {
    [$server, $sapi, $override, $expected] = $case;
    if (detectSiteEnvironment($server, $sapi, $override) !== $expected) throw new RuntimeException('Incorrect environment selection');
}
$rejected = false;
try {
    detectSiteEnvironment([], 'cli', 'prodution');
} catch (RuntimeException $error) {
    $rejected = true;
}
if (!$rejected) throw new RuntimeException('An invalid environment must fail');
$original = getenv('UY_ENV');
try {
    putenv('UY_ENV=development');
    $local = require __DIR__ . '/../config/local.example.php';
    putenv('UY_ENV=production');
    $production = require __DIR__ . '/../config/local.example.php';
    if ($local['database'] !== 'uy_db' || $production['database'] !== 'YOUR_INFINITYFREE_DATABASE_NAME') {
        throw new RuntimeException('Template did not select the correct database profile');
    }
} finally {
    putenv($original === false ? 'UY_ENV' : 'UY_ENV=' . $original);
}
echo "Detecção e seleção de credenciais verificadas: localhost, produção, cabeçalho forjado e sobrescrita explícita.\n";
