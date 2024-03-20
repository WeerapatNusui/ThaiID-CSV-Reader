<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    require("config.php");
    $config = new config();

    $content = file_get_contents('php://input');
    $input = json_decode($content, true);

    $user = $input['user'];
    $pass = $input['pass'];
    $sql = "SELECT userName,userPass FROM user WHERE userName = :userName";
    $stmt = $config->condb->prepare($sql);
    $stmt->execute([
        'userName' => $user
    ]);
    $json = $stmt->fetch(PDO::FETCH_ASSOC);
    if ($json) {
        $validPassword = password_verify($pass, $json['userPass']);
        if ($validPassword) {
            echo json_encode('true');
        } else {
            echo json_encode('false');
        }
    }
}
?>