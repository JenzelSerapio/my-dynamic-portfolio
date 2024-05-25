<?php
include 'config.php'; // This includes your database connection

$sql = "SELECT * FROM personal_info WHERE id = 1"; // Assuming you only have one entry
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $data = $result->fetch_assoc();
    echo json_encode($data);
} else {
    echo "No data found";
}

$conn->close();
?>
