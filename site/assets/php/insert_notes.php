<?php
	
	include 'conn.php';

	if( (isset($_POST['notes'])) && !empty($_POST['notes']) && (isset($_POST['title'])) && !empty($_POST['title'])){
		//session_start();
		
		$result = $db->prepare("INSERT INTO notes VALUES(NULL, ?, ?, NULL, NULL, NULL)");
		$result->bind_param('ss',  trim($_POST['title']),trim($_POST['notes']));

		if ($result->execute()){
			echo '1';
			echo shell_exec("/usr/bin/python /opt/lampp/htdocs/site/assets/php/td.py 2>&1");
		}
		else
			echo '2';
		
		
		
	}
	else 
		echo '4';

?>