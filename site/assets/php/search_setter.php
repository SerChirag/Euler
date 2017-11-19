<?php
	
	include 'conn.php';

	if( (isset($_POST['str'])) && !empty($_POST['str']) ){
		session_start();
		
		$_SESSION['str_to_search'] = $_POST['str'];
		$_SESSION['tab_to_open'] = 3;
		
		
	}
	else 
		echo '4';

?>