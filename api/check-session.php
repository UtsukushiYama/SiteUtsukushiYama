<?php
require_once __DIR__ . '/config.php';
requireMethod('GET');
$user=authenticatedUser();
// Anonymous navigation does not need a database or credentials.
sendSuccess(['user'=>$user ? publicUser($user) : null]);
