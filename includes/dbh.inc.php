<?php
$url = getenv('JAWSDB_URL');
$dbparts = parse_url($url);

$hostname = $dbparts['x40p5pp7n9rowyv6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com'];
$username = $dbparts['ybso5b8pq4se2yeo'];
$password = $dbparts['eja2xwke89wn0st9'];
$database = ltrim($dbparts['xo0n4ya5m71arj2d']);


// Create connection
$conn = mysqli_connect($hostname, $username, $password, $database);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connection was successfully established!";
?>