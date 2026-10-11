<?php
require_once __DIR__.'/api/config.php';
$pages=json_decode(file_get_contents(__DIR__.'/js/pages.json'),true,32,JSON_THROW_ON_ERROR);
$page=$_GET['page']??'PainelLanding.html';
if (!is_string($page) || !isset($pages[$page]) || !is_file(__DIR__.'/'.$page)) {
    http_response_code(404);exit('Página não encontrada.');
}
$mode=$pages[$page]['required'];
if ($mode && !allowedMode(authenticatedUser(),$mode)) {
    header('Cache-Control: no-store');
    header('Location: PainelPlacar.html?acesso='.rawurlencode($mode),true,302);exit;
}
header('Content-Type: text/html; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: SAMEORIGIN');
header('Referrer-Policy: strict-origin-when-cross-origin');
readfile(__DIR__.'/'.$page);
