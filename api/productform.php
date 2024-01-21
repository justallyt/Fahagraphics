<?php 

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');
    header('Access-Control-Allow-Methods:  POST, PUT, GET');

    $rest_json = file_get_contents("php://input");

    $_POST = json_decode($rest_json, true);

    $email_destination = "albertjunk2030@gmail.com";
    $subject = "New Message From Website Product Form";

    if($_POST['form_data']){
        $name = $_POST['form_data']["fullname"];
        $email = $_POST['form_data']['email'];
        $phone = $_POST['form_data']['phone'];
        $product = $_POST['form_data']['product'];
        $msg = $_POST['form_data']['extra'];
        $special = $_POST['form_data']['special'];

        $header = "Email Address: ".$email;
        $body = "Hello, My name is  ". $name. " \n  Email Address: ".$email. 
        "\n Phone Number: ".$phone.
        "\n Product of Interest: ".$product.
        "\n\n".
        $msg;

        if(empty($special)){
            echo json_encode(["message" => "Your message has been received. Thank you"]);
      }else{
         echo json_encode(["message" => "Sorry your inquiry was not sent."]);
      }
      
}else{
      echo json_encode(['message' => "Internal Server Error. Please wait a moment then try again. Thanks"]);
}