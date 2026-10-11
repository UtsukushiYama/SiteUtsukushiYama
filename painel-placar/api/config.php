<?php
/** Shared backend, compatible with PHP 8.1+ and the original MySQL schema. */
declare(strict_types=1);
date_default_timezone_set('America/Sao_Paulo');
const SESSION_DURATION = 86400;
const SESSION_COOKIE = 'pp_session';
function configuration(): array {
    static $config;
    if ($config !== null) return $config;
    $local = __DIR__ . '/../config/local.php';
    $config = is_file($local) ? require $local : [];
    if (!is_array($config)) throw new RuntimeException('Invalid local configuration');
    foreach (['host','port','database','username','password'] as $key) {
        $value = getenv('PP_DB_' . strtoupper($key));
        if ($value !== false) $config[$key] = $value;
    }
    return $config + ['host'=>'127.0.0.1', 'port'=>3306, 'database'=>'uy_db'];
}
function getConnection(): mysqli {
    $config = configuration();
    if (!isset($config['username'], $config['password'])) sendError('Banco de dados ainda não configurado.', 503);
    try {
        mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
        $db = new mysqli($config['host'], $config['username'], $config['password'], $config['database'], (int)$config['port']);
        $db->set_charset('utf8mb4');
        $db->query("SET time_zone = '-03:00'");
        return $db;
    } catch (Throwable $error) {
        error_log('Placar Kyokushin: database connection failed');
        sendError('Banco de dados indisponível.', 503);
    }
}
function closeConnection($db): void { if ($db) $db->close(); }
function sendSuccess($data = [], array $extra = []): void {
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    header('X-Content-Type-Options: nosniff');
    echo json_encode(['success'=>true, 'data'=>$data]+$extra, JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
    exit;
}
function sendError(string $message, int $status = 400): void {
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    header('X-Content-Type-Options: nosniff');
    echo json_encode(['success'=>false, 'error'=>$message], JSON_UNESCAPED_UNICODE);
    exit;
}
function requireMethod(string $method): void {
    if (($_SERVER['REQUEST_METHOD'] ?? '') !== $method) {
        header('Allow: ' . $method);
        sendError('Método não permitido.', 405);
    }
    if ($method !== 'GET') {
        // SameSite cookies plus JSON-only requests and an exact Origin check prevent cross-site writes.
        $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
        $host = $_SERVER['HTTP_HOST'] ?? '';
        if ($origin !== '' && (parse_url($origin, PHP_URL_HOST) . (parse_url($origin, PHP_URL_PORT) ? ':' . parse_url($origin, PHP_URL_PORT) : '')) !== $host) sendError('Origem não permitida.', 403);
        if (stripos($_SERVER['CONTENT_TYPE'] ?? '', 'application/json') !== 0) sendError('Envie JSON.', 415);
    }
}
function getRequestBody(): array {
    if ((int)($_SERVER['CONTENT_LENGTH'] ?? 0) > 150000) sendError('Conteúdo muito grande.', 413);
    try { $body = json_decode(file_get_contents('php://input'), true, 32, JSON_THROW_ON_ERROR); }
    catch (JsonException $error) { sendError('JSON inválido.'); }
    if (!is_array($body)) sendError('JSON inválido.');
    return $body;
}
function getTokenFromRequest(): ?string {
    $token = $_COOKIE[SESSION_COOKIE] ?? null;
    return is_string($token) && preg_match('/^[a-f0-9]{64}$/D', $token) ? $token : null;
}
function setSessionCookie(string $token, int $expires): void {
    // Use the real HTTPS setting, not untrusted forwarding headers.
    $secure = !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off';
    $path = str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? '/'));
    if (str_ends_with($path, '/api')) $path = dirname($path);
    if ($path === '.' || $path === '/') $path = '/'; else $path = rtrim($path, '/') . '/';
    setcookie(SESSION_COOKIE, $token, ['expires'=>$expires,'path'=>$path,'secure'=>$secure,'httponly'=>true,'samesite'=>'Strict']);
}
function getClientIp(): string { return $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0'; }
function logEvent(mysqli $db, ?int $id, string $username, string $event, ?string $detail = null): void {
    $ip = getClientIp(); $ua = substr($_SERVER['HTTP_USER_AGENT'] ?? '', 0, 255);
    $stmt = $db->prepare('INSERT INTO placar_access_log (usuario_id, username_tentado, evento, ip_address, user_agent, detalhes) VALUES (?,?,?,?,?,?)');
    $stmt->bind_param('isssss', $id, $username, $event, $ip, $ua, $detail); $stmt->execute();
}
function authenticatedUser(?mysqli $db = null): ?array {
    $token = getTokenFromRequest();
    if (!$token) return null;
    $db = $db ?? getConnection();
    $stmt = $db->prepare('SELECT u.*, s.expires_at FROM placar_sessoes s JOIN placar_usuarios u ON u.id=s.usuario_id WHERE s.session_token=? AND s.expires_at>NOW() AND u.ativo=1 AND (u.data_expiracao IS NULL OR u.data_expiracao>=CURDATE()) LIMIT 1');
    $stmt->bind_param('s', $token); $stmt->execute();
    $user = $stmt->get_result()->fetch_assoc();
    return $user ?: null;
}
function allowedMode(?array $user, ?string $mode): bool {
    return !$mode || ($user && in_array($mode, ['kata','kumite'], true) && (bool)$user['permite_'.$mode]);
}
function publicUser(array $user): array {
    $permissions=[];
    foreach (['kata','kumite'] as $mode) if ($user['permite_'.$mode]) $permissions[]=$mode;
    $logo=$user['logo']??'img/logo.svg';
    if (!is_string($logo) || str_contains($logo, '..') || !preg_match('~^img/[a-zA-Z0-9_./-]+\.(?:png|jpg|jpeg|webp|svg)$~D', $logo)) $logo='img/logo.svg';
    return ['username'=>$user['username'],'nome_display'=>$user['nome_display'],'nivel_acesso'=>$user['nivel_acesso'],'data_expiracao'=>$user['data_expiracao'] ? date('d/m/Y',strtotime($user['data_expiracao'])) : null,'permissions'=>$permissions,'logo'=>$logo];
}
// Unexpected SQL or filesystem exceptions must not leak internal details.
set_exception_handler(function (Throwable $error): void {
    error_log('Placar Kyokushin: ' . get_class($error));
    sendError('Não foi possível concluir a operação.', 500);
});
