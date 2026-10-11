<?php
// Local cloud setup only. Never install this utility on the production server.
if(PHP_SAPI!=='cli'){http_response_code(403);exit;}
$file=__DIR__.'/../config/local.php';
if(is_file($file))exit;
$root=new mysqli('localhost','root','',null,3307,'/workspace/runtime/mysql.sock');
$password=bin2hex(random_bytes(24));
$escaped=$root->real_escape_string($password);
$root->query("CREATE USER IF NOT EXISTS 'uy_development'@'127.0.0.1' IDENTIFIED BY '$escaped'");
$root->query("ALTER USER 'uy_development'@'127.0.0.1' IDENTIFIED BY '$escaped'");
foreach(['uy_db','uy_test_db'] as $name)$root->query("GRANT ALL ON `$name`.* TO 'uy_development'@'127.0.0.1'");
$config=['host'=>'127.0.0.1','port'=>3307,'database'=>'uy_db','username'=>'uy_development','password'=>$password];
$previousEnvironment=getenv('UY_ENV');
putenv('UY_ENV=production');
$production=require __DIR__.'/../config/local.example.php';
putenv($previousEnvironment===false?'UY_ENV':'UY_ENV='.$previousEnvironment);
$profiles=['development'=>$config,'production'=>$production];
$content="<?php\nrequire_once __DIR__ . '/environment.php';\n";
$content.='$environment = detectSiteEnvironment($_SERVER, PHP_SAPI, getenv(\'UY_ENV\'));'."\n";
$content.='$databases = '.var_export($profiles,true).";\nreturn \$databases[\$environment];\n";
file_put_contents($file,$content);chmod($file,0600);
echo "Banco local configurado sem alterar credenciais existentes.\n";
