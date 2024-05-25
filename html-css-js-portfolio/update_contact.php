<?php
include 'config.php'; // Database configuration

header('Content-Type: application/json');
$requestMethod = $_SERVER["REQUEST_METHOD"];

if ($requestMethod == "POST") {
    $email = $conn->real_escape_string($_POST['email']);
    $linkedin = $conn->real_escape_string($_POST['linkedin']);

    $sql = "UPDATE contact_info SET email=?, linkedin=? WHERE id=1"; // Assuming you have one row with id=1

    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        echo json_encode(['success' => false, 'message' => $conn->error]);
        exit;
    }

    $stmt->bind_param("ss", $email, $linkedin);
    if ($stmt->execute()) {
        echo json_encode(['success' => true, 'message' => 'Contact information updated successfully.']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to update contact information.']);
    }

    $stmt->close();
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
}

$conn->close();
?>
