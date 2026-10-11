<?php
/** Serve existing HTML URLs only after checking the server-side access policy. */
require_once __DIR__.'/api/config.php';
$pages=require __DIR__.'/config/access.php';
$page=$_GET['page']??'index.html';
if (!is_string($page) || !array_key_exists($page,$pages) || !is_file(__DIR__.'/'.$page)) {http_response_code(404);$page='404.html';}
$required=$pages[$page]??null;
if ($required) {
    $user=authenticatedUser();
    if (!allowedLevel($user['nivel_acesso']??null,$required)) {
        header('Cache-Control: no-store');
        header('Location: index.html?modal=upgrade&level='.rawurlencode($required),true,302);exit;
    }
}
header('Content-Type: text/html; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: SAMEORIGIN');
header('Referrer-Policy: strict-origin-when-cross-origin');
readfile(__DIR__.'/'.$page);
