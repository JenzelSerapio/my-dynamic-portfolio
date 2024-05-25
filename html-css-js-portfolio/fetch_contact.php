<?php
include 'config.php';

header('Content-Type: application/json');

$sql = "SELECT email, linkedin FROM contact_info WHERE id = 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode($row);
} else {
    echo json_encode(['error' => 'No data found']);
}

$conn->close();
?>
