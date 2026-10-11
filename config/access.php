<?php
// The page manifest is the single source of access requirements and page scripts.
$manifest=json_decode(file_get_contents(__DIR__.'/../js/pages.json'),true,32,JSON_THROW_ON_ERROR);
return array_map(fn($page)=>$page['required'],$manifest);
