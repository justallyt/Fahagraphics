<?php 

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');
    header('Access-Control-Allow-Methods:  POST, PUT, GET');

    $rest_json = file_get_contents("php://input");

    $_POST = json_decode($rest_json, true);