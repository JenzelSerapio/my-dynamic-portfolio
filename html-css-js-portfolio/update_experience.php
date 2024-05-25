<?php
include 'config.php';

$category = $_POST['category'];
$skill = $_POST['skill'];
$proficiency = $_POST['proficiency'];

$sql = "UPDATE experience SET proficiency = '$proficiency' WHERE category = '$category' AND skill = '$skill'";

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}

$conn->close();
?>
