<?php
include 'config.php';

$sql = "SELECT * FROM about_me WHERE id = 1"; // Assuming there's only one entry
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $data = $result->fetch_assoc();
    echo json_encode($data);
} else {
    echo "No data found";
}

$conn->close();
?>
