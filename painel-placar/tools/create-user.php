<?php
if (PHP_SAPI!=='cli') {http_response_code(403);exit;}
require __DIR__.'/../api/config.php';
if(count($argv)<4 || !in_array($argv[2],['operador','admin'],true)) {fwrite(STDERR,"Uso: php tools/create-user.php USUARIO NIVEL 'Nome de exibição'\n");exit(1);}
$username=$argv[1];$level=$argv[2];$display=$argv[3];
if(strlen($username)>100 || strlen($display)>150){fwrite(STDERR,"Nome muito longo.\n");exit(1);}
fwrite(STDERR,"Nova senha (mínimo 12 caracteres): ");
$tty=function_exists('stream_isatty') && stream_isatty(STDIN) && PHP_OS_FAMILY!=='Windows';if($tty)system('stty -echo');
try{$password=rtrim(fgets(STDIN),"\r\n");}finally{if($tty)system('stty echo');fwrite(STDERR,"\n");}
if(strlen($password)<12){fwrite(STDERR,"Senha muito curta.\n");exit(1);}
$db=getConnection();$hash=password_hash($password,PASSWORD_DEFAULT);
$stmt=$db->prepare('INSERT INTO placar_usuarios (username,password_hash,nome_display,nivel_acesso,data_expiracao) VALUES (?,?,?,?,NULL)');
$stmt->bind_param('ssss',$username,$hash,$display,$level);$stmt->execute();
fwrite(STDOUT,"Conta criada.\n");
