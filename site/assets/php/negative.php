<?php
	
	$conn = mysqli_connect("localhost", "root", NULL) or die(DB_MSG_ERROR);
    $db = mysqli_select_db($conn,'euler') or die(DB_MSG_ERROR);
    $value_search = $_POST['value'];
    $wow = "UPDATE links set rating = rating-1 where id = $value_search";
    mysqli_query($conn,$wow);
    $conn->close();
?>