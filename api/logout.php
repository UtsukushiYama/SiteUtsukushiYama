<?php
require_once __DIR__ . '/config.php';
requireMethod('POST');
$token=getTokenFromRequest();
if ($token) {
    $db=getConnection();$user=authenticatedUser($db);
    $stmt=$db->prepare('DELETE FROM sessoes WHERE session_token=?');$stmt->bind_param('s',$token);$stmt->execute();
    if ($user) logEvent($db,(int)$user['id'],$user['username'],'logout');
}
setSessionCookie('',time()-3600);
sendSuccess(['message'=>'Sessão encerrada.']);
