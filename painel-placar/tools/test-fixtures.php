<?php
if (PHP_SAPI!=='cli') {http_response_code(403);exit;}
require __DIR__.'/../api/config.php';
if (configuration()['database']!=='uy_test_db') {fwrite(STDERR,"Fixtures require uy_test_db.\n");exit(1);}
$db=getConnection();$password=bin2hex(random_bytes(20));$hash=password_hash($password,PASSWORD_DEFAULT);
foreach (['admin','operator','kata','expired','disabled','same-name'] as $name) {
    $username=$name==='same-name'?'uy_test_admin':'pp_test_'.$name;
    $display='Teste '.$name;$level=$name==='admin'?'admin':'operador';$expiry=$name==='expired'?'2020-01-01':null;
    $active=$name==='disabled'?0:1;$kata=1;$kumite=$name==='kata'?0:1;
    $stmt=$db->prepare('INSERT INTO placar_usuarios (username,password_hash,nome_display,nivel_acesso,data_expiracao,ativo,permite_kata,permite_kumite) VALUES (?,?,?,?,?,?,?,?) ON DUPLICATE KEY UPDATE password_hash=VALUES(password_hash),nivel_acesso=VALUES(nivel_acesso),data_expiracao=VALUES(data_expiracao),ativo=VALUES(ativo),permite_kata=VALUES(permite_kata),permite_kumite=VALUES(permite_kumite)');
    $stmt->bind_param('sssssiii',$username,$hash,$display,$level,$expiry,$active,$kata,$kumite);$stmt->execute();
}
echo json_encode(['password'=>$password]);
