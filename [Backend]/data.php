<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");
$fileName = "ThaiID/ThaiID.CSV";

$handle = fopen($fileName, "r");
$last = 0;
while (($row = fgetcsv($handle)) !== false) {
    $last++;
}
fclose($handle);

function convertDateFormat($inputDate)
{
    $timestamp = strtotime($inputDate);
    if ($timestamp === false) {
        return 'Invalid date format';
    }
    $formattedDate = date('Y-m-d', $timestamp);
    return $formattedDate;
}

$handle = fopen($fileName, "r");
$count = 0;
while (($row = fgetcsv($handle)) !== false) {
    if ($count == ($last - 1)) {
        $no = iconv('TIS-620', 'UTF-8//ignore', $row[6]);
        $date = iconv('TIS-620', 'UTF-8//ignore', $row[24]);
        $date = convertDateFormat($date);
        $gender = iconv('TIS-620', 'UTF-8//ignore', $row[23]);
        $title = iconv('TIS-620', 'UTF-8//ignore', $row[7]);
        $fname = iconv('TIS-620', 'UTF-8//ignore', $row[8]);
        $lname = iconv('TIS-620', 'UTF-8//ignore', $row[10]);
        $address = iconv('TIS-620', 'UTF-8//ignore', $row[15] . " " . $row[16] . " " . $row[18] . " " . $row[19] . " " . $row[20] . " " . $row[21] . " " . $row[22]);
        $json = array(
            "no" => $no,
            "date" => $date,
            "gender" => $gender,
            "title" => $title,
            "fname" => $fname,
            "lname" => $lname,
            "address" => $address
        );
        echo json_encode($json, JSON_UNESCAPED_UNICODE);
    }
    $count++;
}
fclose($handle);
?>