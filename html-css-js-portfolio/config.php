<?php
$servername = "localhost"; // Since you are using Laragon, localhost should work
$username = "root"; // Replace with your MySQL username, default is often 'root'
$password = ""; // Replace with your MySQL password, default is often empty ''
$dbname = "portfolio_db"; // The database name you created

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
