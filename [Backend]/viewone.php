<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    require ("config.php");
    $config = new config();

    $content = file_get_contents('php://input');
    $input = json_decode($content, true);

    $text = $input['text'];

    if ($text == 'getOne') {
        $pPaper = $input['data'];
        $sql = "SELECT * FROM population WHERE pPaper = :pPaper";
        $stmt = $config->condb->prepare($sql);
        $stmt->execute([
            'pPaper' => $pPaper
        ]);
        $json = $stmt->fetch(PDO::FETCH_ASSOC);
        echo json_encode($json, JSON_UNESCAPED_UNICODE);
    }
    $config->condb = null;
}
?>