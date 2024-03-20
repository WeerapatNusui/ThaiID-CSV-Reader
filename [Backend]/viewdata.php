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

    if ($text == 'viewData') {
        $sql = "SELECT pPaper,pDate,pNo,pTitle,pFName,pLName,pGender,pBirth FROM population";
        $stmt = $config->condb->prepare($sql);
        $stmt->execute();
        $json = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($json, JSON_UNESCAPED_UNICODE);
    }

    if ($text == 'viewDataOne') {
        $pPaper = $input['data'];
        $sql = "SELECT * FROM population WHERE pPaper = :pPaper";
        $stmt = $config->condb->prepare($sql);
        $stmt->execute([
            'pPaper' => $pPaper
        ]);
        $json = $stmt->fetch(PDO::FETCH_ASSOC);
        echo json_encode($json, JSON_UNESCAPED_UNICODE);
    }

    if ($text == 'delData') {
        $pPaper = $input['data'];
        $sql = "DELETE FROM population WHERE pPaper = :pPaper";
        $stmt = $config->condb->prepare($sql);
        $stmt->execute([
            'pPaper' => $pPaper
        ]);
    }

    if ($text == 'editData') {
        $paper = $input['paper'];
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
        $sql = "UPDATE population SET
            pNo = :pNo,
            pBirth = :pBirth,
            pGender = :pGender,
            pTitle = :pTitle,
            pFName = :pFName,
            pLName = :pLName,
            pAddress = :pAddress,
            pDisease = :pDisease,
            pAllergy = :pAllergy,
            pPressure = :pPressure,
            pWeight = :pWeight,
            pTreatment = :pTreatment
        WHERE pPaper = :pPaper";
        $stmt = $config->condb->prepare($sql);
        $stmt->execute([
            'pPaper' => $paper,
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

    if ($text == 'getCSV') {
        $sql = "SELECT * FROM population";
        $stmt = $config->condb->prepare($sql);
        $stmt->execute();
        $json = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($json, JSON_UNESCAPED_UNICODE);
    }

    if ($text == 'searchNo') {
        $dataNo = $input['dataNo'];
        $sql = "SELECT * FROM population WHERE pNo LIKE :dataNo";
        $stmt = $config->condb->prepare($sql);
        $stmt->execute([
            'dataNo' => '%' . $dataNo . '%'
        ]);
        $json = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($json, JSON_UNESCAPED_UNICODE);
    }

    if ($text == 'searchDate') {
        $startDate = $input['startDate'];
        $endDate = $input['endDate'];
        $sql = "SELECT * FROM population WHERE pDate BETWEEN :startDate AND :endDate";
        $stmt = $config->condb->prepare($sql);
        $stmt->execute([
            'startDate' => $startDate,
            'endDate' => $endDate
        ]);
        $json = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($json, JSON_UNESCAPED_UNICODE);
    }
    $config->condb = null;
}
?>