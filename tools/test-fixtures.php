<?php
// Test accounts only in a dedicated test database. Never run against production.
if (PHP_SAPI!=='cli') {http_response_code(403);exit;}
require __DIR__.'/../api/config.php';
if (configuration()['database']!=='uy_test_db') {fwrite(STDERR,"Fixtures require uy_test_db.\n");exit(1);}
$db=getConnection();$password=bin2hex(random_bytes(20));$hash=password_hash($password,PASSWORD_DEFAULT);
foreach (['admin'=>'admin','learner'=>'iniciante','expired'=>'admin','disabled'=>'admin'] as $name=>$level) {
    $username='uy_test_'.$name;$display='Teste '.$name;$expiry=$name==='expired'?'2020-01-01':null;$active=$name==='disabled'?0:1;
    $stmt=$db->prepare('INSERT INTO usuarios (username,password_hash,nome_display,nivel_acesso,data_expiracao,ativo) VALUES (?,?,?,?,?,?) ON DUPLICATE KEY UPDATE password_hash=VALUES(password_hash),nivel_acesso=VALUES(nivel_acesso),data_expiracao=VALUES(data_expiracao),ativo=VALUES(ativo)');
    $stmt->bind_param('sssssi',$username,$hash,$display,$level,$expiry,$active);$stmt->execute();
}
echo json_encode(['password'=>$password]);
