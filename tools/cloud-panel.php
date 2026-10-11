<?php
// Only creates a separate private configuration for the isolated local development database.
if (PHP_SAPI!=='cli') {http_response_code(403);exit;}
$file=__DIR__.'/../painel-placar/config/local.php';
if (is_file($file)) exit;
$development=require __DIR__.'/../config/local.php';
$previous=getenv('PP_ENV');putenv('PP_ENV=production');
$production=require __DIR__.'/../painel-placar/config/local.example.php';
putenv($previous===false?'PP_ENV':'PP_ENV='.$previous);
$profiles=['development'=>$development,'production'=>$production];
$content="<?php\nrequire_once __DIR__ . '/environment.php';\n";
$content.='$environment = detectPanelEnvironment($_SERVER, PHP_SAPI, getenv(\'PP_ENV\'));'."\n";
$content.='$databases = '.var_export($profiles,true).";\nreturn \$databases[\$environment];\n";
file_put_contents($file,$content);chmod($file,0600);
echo "Configuração privada de desenvolvimento do placar criada.\n";
