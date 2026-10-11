<?php
require_once __DIR__ . '/config.php';
requireMethod('POST');
$body = getRequestBody();
$username = $body['username'] ?? ''; $password = $body['password'] ?? '';
if (!is_string($username) || !is_string($password) || trim($username)==='' || $password==='' || strlen($username)>100 || strlen($password)>1024) sendError('Informe usuário e senha válidos.');
$username = trim($username); $db = getConnection(); $ip = getClientIp();
// Limit failed attempts per IP and per username across browser sessions.
$stmt = $db->prepare("SELECT COUNT(*) AS n FROM placar_access_log WHERE evento='login_fail' AND created_at>DATE_SUB(NOW(), INTERVAL 15 MINUTE) AND (ip_address=? OR username_tentado=?)");
$stmt->bind_param('ss',$ip,$username);$stmt->execute();
if ((int)$stmt->get_result()->fetch_assoc()['n'] >= 10) sendError('Muitas tentativas. Aguarde 15 minutos.',429);
$stmt = $db->prepare('SELECT * FROM placar_usuarios WHERE username=? LIMIT 1');
$stmt->bind_param('s',$username);$stmt->execute();$user=$stmt->get_result()->fetch_assoc();
// A fixed dummy hash avoids revealing whether a username exists through response time.
$valid = password_verify($password, $user['password_hash'] ?? '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2uheWG/igi.');
if (!$user || !$valid || !$user['ativo'] || ($user['data_expiracao'] && $user['data_expiracao']<date('Y-m-d'))) {
    logEvent($db,$user ? (int)$user['id'] : null,$username,'login_fail');
    sendError('Usuário, senha ou validade do acesso inválidos.',401);
}
$db->query('DELETE FROM placar_sessoes WHERE expires_at<NOW()');
$old = getTokenFromRequest();
if ($old) { $stmt=$db->prepare('DELETE FROM placar_sessoes WHERE session_token=?');$stmt->bind_param('s',$old);$stmt->execute(); }
$token=bin2hex(random_bytes(32));$ua=substr($_SERVER['HTTP_USER_AGENT']??'',0,255);$expiry=date('Y-m-d H:i:s',time()+SESSION_DURATION);
$stmt=$db->prepare('INSERT INTO placar_sessoes (usuario_id,session_token,ip_address,user_agent,expires_at) VALUES (?,?,?,?,?)');
$stmt->bind_param('issss',$user['id'],$token,$ip,$ua,$expiry);$stmt->execute();
$stmt=$db->prepare('UPDATE placar_usuarios SET last_login=NOW() WHERE id=?');$stmt->bind_param('i',$user['id']);$stmt->execute();
logEvent($db,(int)$user['id'],$username,'login_ok');
setSessionCookie($token,time()+SESSION_DURATION);
sendSuccess(['user'=>publicUser($user)]);
