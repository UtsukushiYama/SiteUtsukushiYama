<?php
require_once __DIR__.'/config.php';
$directory=getenv('UY_STORAGE_DIR') ?: __DIR__.'/../storage';
$file=$directory.'/stories.json';
if (($_SERVER['REQUEST_METHOD']??'')==='GET') {
    requireMethod('GET');
    $path=is_file($file)?$file:__DIR__.'/../data/stories.json';
    $document=json_decode(file_get_contents($path),true,32,JSON_THROW_ON_ERROR);
    sendSuccess($document);
}
requireMethod('POST');
$user=authenticatedUser();
if (!$user || $user['nivel_acesso']!=='admin') sendError('Apenas administradores podem editar stories.',403);
$body=getRequestBody();
function storyString($value,int $limit,bool $allowEmpty=false): string {
    if (!is_string($value) || strlen($value)>$limit || (!$allowEmpty && trim($value)==='')) sendError('Texto da publicação inválido.');
    return trim($value);
}
$input=$body['story']??null;
if (!is_array($input)) sendError('Publicação inválida.');
$id=storyString($input['id']??null,60);
if (!preg_match('/^[a-z0-9]+(?:-[a-z0-9]+)*$/D',$id)) sendError('Use letras minúsculas, números e hífens no identificador.');
$story=['id'=>$id];
foreach (['title'=>180,'category'=>100,'summary'=>600,'credit'=>240] as $key=>$limit) $story[$key]=storyString($input[$key]??null,$limit);
$story['symbol']='勇';
$url=storyString($input['sourceUrl']??'',500,true);
if ($url!=='' && (!filter_var($url,FILTER_VALIDATE_URL) || parse_url($url,PHP_URL_SCHEME)!=='https')) sendError('A fonte deve ser um endereço HTTPS.');
$story['sourceUrl']=$url;
$slides=$input['slides']??null;
if (!is_array($slides) || count($slides)<1 || count($slides)>12) sendError('Use de 1 a 12 telas.');
$story['slides']=[];
foreach ($slides as $slide) {
    if (!is_array($slide)) sendError('Tela inválida.');
    $heading=storyString($slide['heading']??null,240);
    $paragraphs=$slide['paragraphs']??[];
    if (!is_array($paragraphs) || count($paragraphs)>4) sendError('Use até quatro parágrafos por tela.');
    $texts=[];
    foreach ($paragraphs as $paragraph) $texts[]=storyString($paragraph,500);
    if (strlen(implode(' ',$texts))>1000) sendError('Divida o texto em mais telas.');
    $story['slides'][]=['heading'=>$heading,'paragraphs'=>$texts];
}
// Serialize concurrent edits. Atomic replacement prevents readers from seeing partial JSON.
$lock=fopen($directory.'/stories.lock','c');
if (!$lock || !flock($lock,LOCK_EX)) sendError('Não foi possível salvar. Verifique a permissão da pasta storage.',503);
$document=json_decode(file_get_contents(is_file($file)?$file:__DIR__.'/../data/stories.json'),true,32,JSON_THROW_ON_ERROR);
$stories=array_values(array_filter($document['stories'],fn($old)=>$old['id']!==$id));
if (count($stories)>=100) sendError('Limite de 100 publicações atingido.');
array_unshift($stories,$story);
$document=['version'=>1,'stories'=>$stories];
$tmp=tempnam(dirname($file),'story-');
if (!$tmp || file_put_contents($tmp,json_encode($document,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT|JSON_THROW_ON_ERROR))===false || !rename($tmp,$file)) sendError('Não foi possível salvar a publicação.',503);
flock($lock,LOCK_UN);fclose($lock);
sendSuccess($document);
