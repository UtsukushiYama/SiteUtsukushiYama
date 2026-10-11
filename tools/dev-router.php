<?php
$path=rawurldecode(parse_url($_SERVER['REQUEST_URI'],PHP_URL_PATH));
if (preg_match('~(?:^|/)(?:config|storage|tools|tests|docs|node_modules|\.[^/]*)(?:/|$)~i',$path) || preg_match('~/(?:package(?:-lock)?\.json|uy_database\.sql|README\.md|playwright\.config\.js|api/config\.php)$~i',$path)) {http_response_code(403);exit('Forbidden');}
if ($path==='/' || str_ends_with($path,'.html')) {
    $fragments=['header.html','footer.html','blog-sidebar.html','modal-assinatura.html','modal-construcao.html'];
    if (in_array(ltrim($path,'/'),$fragments,true)) return false;
    $_GET['page']=$path==='/' ? 'index.html' : ltrim($path,'/');
    require __DIR__.'/../page.php';return true;
}
if (!is_file(__DIR__.'/..'.$path)) {http_response_code(404);exit('Not found');}
return false;
