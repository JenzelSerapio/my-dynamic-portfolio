<?php
include 'config.php';

$sql = "SELECT * FROM experience";
$result = $conn->query($sql);
$data = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);
} else {
    echo "No data found";
}

$conn->close();
?>
