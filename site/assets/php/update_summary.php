<?php
	
	include 'conn.php';

	if( (isset($_POST['notes'])) && !empty($_POST['notes']) && (isset($_POST['ide'])) && !empty($_POST['ide'])){
		//session_start();
		
		$result = $db->prepare("UPDATE notes set summary = ? WHERE id = ?");
		$result->bind_param('si',  trim($_POST['notes']),trim($_POST['ide']));

		if ($result->execute())
			echo '1';
		else
			echo '2';
		
		
		
	}
	else 
		echo '4';

?>