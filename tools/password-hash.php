<?php
if (PHP_SAPI!=='cli') {http_response_code(403);exit;}
fwrite(STDERR,"Digite a nova senha (não use senhas do código antigo): ");
$tty=function_exists('stream_isatty') && stream_isatty(STDIN) && PHP_OS_FAMILY!=='Windows';
if ($tty) system('stty -echo');
try {$password=rtrim(fgets(STDIN),"\r\n");} finally {if($tty)system('stty echo');fwrite(STDERR,"\n");}
if(strlen($password)<12){fwrite(STDERR,"Use pelo menos 12 caracteres.\n");exit(1);}
echo password_hash($password,PASSWORD_DEFAULT),"\n";
