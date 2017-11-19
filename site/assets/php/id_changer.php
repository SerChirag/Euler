<?php
	
	include 'conn.php';

	if(  (isset($_POST['ide'])) && !empty($_POST['ide'])){
		session_start();

		$_SESSION['id'] = $_POST['ide'];
		
		
		
		
	}
	else 
		echo '4';

?>