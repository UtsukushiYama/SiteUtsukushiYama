<?php
$path=rawurldecode(parse_url($_SERVER['REQUEST_URI'],PHP_URL_PATH));
if ($path==='/painel-placar') {header('Location: /painel-placar/',true,302);return true;}
if (str_starts_with($path,'/painel-placar/')) {
    $placarPath=substr($path,strlen('/painel-placar'));
    return require __DIR__.'/../painel-placar/tools/dev-router.php';
}
if (preg_match('~^/(Painel(?:Landing|Placar|Kata|Kumite|KumiteJogai)\.html)$~D',$path,$match)) {
    header('Location: painel-placar/'.$match[1],true,302);return true;
}
if (preg_match('~(?:^|/)(?:config|storage|tools|tests|docs|node_modules|\.[^/]*)(?:/|$)~i',$path) || preg_match('~/(?:package(?:-lock)?\.json|uy_database\.sql|README\.md|playwright\.config\.js|api/config\.php)$~i',$path)) {http_response_code(403);exit('Forbidden');}
if ($path==='/' || str_ends_with($path,'.html')) {
    $fragments=['header.html','footer.html','blog-sidebar.html','modal-assinatura.html','modal-construcao.html','data/blog-cards.html'];
    if (in_array(ltrim($path,'/'),$fragments,true)) return false;
    $_GET['page']=$path==='/' ? 'index.html' : ltrim($path,'/');
    require __DIR__.'/../page.php';return true;
}
if (!is_file(__DIR__.'/..'.$path)) {http_response_code(404);exit('Not found');}
return false;
