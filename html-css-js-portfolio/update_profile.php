<?php
include 'config.php';

error_reporting(E_ALL);
ini_set('display_errors', 1);

$name = $_POST['name'];
$title = $_POST['title'];
$profile_pic = $_POST['profile_pic'];
$cv_link = $_POST['cv_link'];
$linkedin_url = $_POST['linkedin_url'];
$github_url = $_POST['github_url'];

$sql = "UPDATE personal_info SET 
        name = '$name', 
        title = '$title', 
        profile_pic = '$profile_pic', 
        cv_link = '$cv_link', 
        linkedin_url = '$linkedin_url', 
        github_url = '$github_url' 
        WHERE id = 1";

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}

$conn->close();
?>
