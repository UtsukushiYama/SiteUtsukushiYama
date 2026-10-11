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
file_put_contents($file,"<?php\nreturn ".var_export($config,true).";\n");chmod($file,0600);
echo "Banco local configurado sem alterar credenciais existentes.\n";
