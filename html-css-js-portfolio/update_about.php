<?php
include 'config.php';

$experience = $_POST['experience'];
$education = $_POST['education'];
$description = $_POST['description'];

$sql = "UPDATE about_me SET 
        experience = '$experience', 
        education = '$education', 
        description = '$description'
        WHERE id = 1";

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}

$conn->close();
?>
