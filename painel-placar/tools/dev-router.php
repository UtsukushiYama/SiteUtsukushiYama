<?php
// Used alone with -t painel-placar, or delegated to by the repository's local router.
$path=$placarPath??rawurldecode(parse_url($_SERVER['REQUEST_URI'],PHP_URL_PATH));
if (preg_match('~(?:^|/)(?:config|storage|tools|tests|docs|node_modules|\.[^/]*)(?:/|$)~i',$path) || preg_match('~/(?:placar_database\.sql|README\.md|api/config\.php)$~i',$path)) {
    http_response_code(403);exit('Forbidden');
}
if ($path==='/' || str_ends_with($path,'.html')) {
    $_GET['page']=$path==='/'?'PainelLanding.html':ltrim($path,'/');
    require __DIR__.'/../page.php';return true;
}
if (!is_file(__DIR__.'/..'.$path)) {http_response_code(404);exit('Not found');}
return false;
