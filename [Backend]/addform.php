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

    if ($text == 'addData') {
        $date = date('Y-m-d');
        $no = $input['no'];
        $birth = $input['birth'];
        $gender = $input['gender'];
        $title = $input['title'];
        $fname = $input['fname'];
        $lname = $input['lname'];
        $address = $input['address'];
        $disease = $input['disease'];
        $allergy = $input['allergy'];
        $pressure = $input['pressure'];
        $weight = $input['weight'];
        $treatment = $input['treatment'];
        $sql = "INSERT INTO population (
            pDate,pNo,pBirth,pGender,pTitle,pFName,pLName,
            pAddress,pDisease,pAllergy,pPressure,pWeight,pTreatment
        ) VALUES (
            :pDate,:pNo,:pBirth,:pGender,:pTitle,:pFName,:pLName,
            :pAddress,:pDisease,:pAllergy,:pPressure,:pWeight,:pTreatment
        )";
        $stmt = $config->condb->prepare($sql);
        $stmt->execute([
            'pDate' => $date,
            'pNo' => $no,
            'pBirth' => $birth,
            'pGender' => $gender,
            'pTitle' => $title,
            'pFName' => $fname,
            'pLName' => $lname,
            'pAddress' => $address,
            'pDisease' => $disease,
            'pAllergy' => $allergy,
            'pPressure' => $pressure,
            'pWeight' => $weight,
            'pTreatment' => $treatment
        ]);
    }
    $config->condb = null;
}
?>