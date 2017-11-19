<?php

	include 'assets/php/conn.php';

	session_start();


	$result = $db->prepare("SELECT * FROM notes WHERE id = ?");
	$result->bind_param('s', $_SESSION['id']);

	if($result->execute()){
		$result->bind_result($id, $title, $data, $time, $keywords, $summary);
		while($result->fetch()){
			;
		}
	}

	
?>


<!doctype html>
<html lang="en">

<!-- Mirrored from demos.creative-tim.com/material-kit-pro/sections.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 31 Oct 2017 11:43:43 GMT -->
<head>
	<meta charset="utf-8" />
	<link rel="apple-touch-icon" sizes="76x76" href="assets/img/apple-icon.png">
	<link rel="icon" type="image/png" href="assets/img/favicon.png">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

	<title>View</title>

	<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />

	<!-- Canonical SEO -->
	<link rel="canonical" href="http://www.creative-tim.com/product/material-kit-pro" />

	<!--     Fonts and icons     -->
	<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />

	<!-- CSS Files -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
    <link href="assets/css/material-kit5438.css?v=1.2.0" rel="stylesheet"/>

	<!-- CSS Just for demo purpose, don't include it in your project -->
	<link href="assets/assets-for-demo/vertical-nav.css" rel="stylesheet" />
	<link href="assets/css/daddy.css" rel="stylesheet" />
	<script src = "assets/js/functions.js" type="text/javascript"></script>
	<link href="https://fonts.googleapis.com/css?family=News+Cycle" rel="stylesheet">

</head>

<body class="section-white">

	<nav class="navbar navbar-primary navbar-fixed-top" id="sectionsNav">
    	<div class="container">
        	<!-- Brand and toggle get grouped for better mobile display -->
        	<div class="navbar-header">
        		<button type="button" class="navbar-toggle" data-toggle="collapse">
            		<span class="sr-only">Toggle navigation</span>
		            <span class="icon-bar"></span>
		            <span class="icon-bar"></span>
		            <span class="icon-bar"></span>
        		</button>
        		<a class="navbar-brand" href="index.php"><img  style="max-height: 40px" src="../assets/img/euler.png"><h1 class="theme-l"> <?php echo $title; ?> </h1></a>
        	</div>

        	<div class="collapse navbar-collapse">
        		<ul class="nav navbar-nav navbar-right">
    				<li class="button-container theme-margin-right">
						<a href="examples/notebook.php" class="btn btn-rose btn-round">
							<i class="material-icons">apps</i> NOTEBOOK
						</a>
					</li>

					

					<li class="button-container">
						<a href="examples/new_note.php" class="btn btn-rose btn-round">
							<i class="material-icons theme-xlarge">note_add</i> ADD NOTES
						</a>
					</li>
        		</ul>
        	</div>
    	</div>
    </nav>

	<div class="section-space"></div>

	<div class="cd-section" id="headers">

    
	<div class="cd-section" id="projects">

	<!--     *********    PROJECTS 1     *********      -->

	<div class="projects-1" id="projects-1">

		<div class="container">
			

			<div class="row">
				<div class="col-md-offset-1">

					

				</div>

				<div class="col-md-6">
					<div class="card card-raised  theme-light-grey" style="background-image: url('asset/img/examples/office2.jpg')">

						<div class="card-content">
							<h5 class="category text-info">Keywords</h5>
							<a href="#pablo">
								
							</a>
							
								<?php 

								//echo $keywords; 

								$arr =  explode(" ", $keywords);
								$c = 0;

								//print all the value which are in the array
								foreach($arr as $v){
									$c++;

									if ($c % 7 == 0) {
										$cl = "btn";
									}
									else if ($c % 7 == 1) {
										$cl = "btn-primary";
									}
									else if ($c % 7 == 2) {
										$cl = "btn-info";
									}
									else if ($c % 7 == 3) {
										$cl = "btn-success";
									}
									else if ($c % 7 == 4) {
										$cl = "btn-warning";
									}
									else if ($c % 7 == 5) {
										$cl = "btn-danger";
									}
									else if ($c % 7 == 6) {
										$cl = "btn-rose";
									}

								?>

								<a target = "_blank" href = "https://www.google.co.in/search?q=<?php echo $v; ?>"><button class="btn <?php echo $cl; ?>"><?php echo $v; ?></button>

								    
								<?php    
								}

								?>
							
							
						</div>
					</div>
				</div>

				<div class="col-md-6">
					<div class="card card-raised card-background"  style="background-image: url('asets/img/examples/card-blog3.jpg')">
						<div class="card-content">
							<h5 class="category text-info theme-l theme-text-light-blue">Educational Links</h5>
							
							<p class="card-description theme-xlarge" align="left" style = "font-family: 'News Cycle', sans-serif;">
								Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
							</p>
							<!--<a href="#pablo" class="btn btn-info btn-round">
								 <i class="material-icons">delete_forever</i> Delete 
							</a> -->
						</div>
					</div>
				</div>



				<div class="col-md-12">
					<div class="card card-raised card-background" style="background-image: url('assts/img/examples/card-project6.jpg')">
						<div class="card-content">
							<h5 class="category text-info theme-text-light-blue">Summary</h5>
							
							<p id = "summ" contenteditable = true class="card-description theme-xlarge" style = "font-family: 'News Cycle', sans-serif;"><?php echo $summary; ?></p>
							<a  onclick="updateNoteSummary(<?php echo $_SESSION['id']; ?> ,document.getElementById('summ').innerHTML)" class="btn btn-warning btn-round">
								<i class="material-icons">save</i> SAVE
							</a>
						</div>
					</div>
				</div>

			</div>

		</div>
	</div>

	<!--     *********    END PROJECTS 1      *********      -->


	<!--     *********    PROJECTS 2     *********      -->

	

	<!--     *********    END PROJECTS 2      *********      -->


	<!--     *********    PROJECTS 3     *********      -->

	<div class="projects-3 section-dark" id="projects-3">

		<div class="container">
			<div class="row">
				<div class="col-md-8 col-md-offset-2 text-center">
					
					<h2 class="title">Full Notes</h2>
				</div>
			</div>

			<div class="row">

				<div class="col-md-12 ">
					<div class="card card-background">
						<a href="#pablo">
							<div class="card-image">
								
							</div>
						</a>
						<div class="card-content">
							<h3>&nbsp;</h3>
							<p id = "dtta" contenteditable = true  style = "min-width: 650px; font-family: 'News Cycle', sans-serif; " align = "left" class="theme-xlarge card-description theme-right">
								<?php echo $data;?>
							</p>

							<a onclick="updateNoteData(<?php echo $_SESSION['id']; ?> ,document.getElementById('dtta').innerHTML)" class="theme-right btn btn-warning btn-round">
								<i class="material-icons">save</i> SAVE
							</a>

						<h3>&nbsp;</h3> 
						
						</div>

					</div>
				</div>

				

				

			</div>

		</div>
	</div>

	<!--     *********    END PROJECTS 3      *********      -->


	<!--     *********    PROJECTS 4     *********      -->

	

	<!--     *********    END PROJECTS 4      *********      -->

	</div>

	
</body>
	<!--   Core JS Files   -->
	<script src="assets/js/jquery.min.js" type="text/javascript"></script>
	<script src="assets/js/bootstrap.min.js" type="text/javascript"></script>
	<script src="assets/js/material.min.js"></script>

	<!--    Plugin for Date Time Picker and Full Calendar Plugin   -->
	<script src="assets/js/moment.min.js"></script>

	<!--	Plugin for the Sliders, full documentation here: http://refreshless.com/nouislider/   -->
	<script src="assets/js/nouislider.min.js" type="text/javascript"></script>

	<!--	Plugin for the Datepicker, full documentation here: https://github.com/Eonasdan/bootstrap-datetimepicker   -->
	<script src="assets/js/bootstrap-datetimepicker.js" type="text/javascript"></script>

	<!--	Plugin for Select, full documentation here: http://silviomoreto.github.io/bootstrap-select   -->
	<script src="assets/js/bootstrap-selectpicker.js" type="text/javascript"></script>

	<!--	Plugin for Tags, full documentation here: http://xoxco.com/projects/code/tagsinput/   -->
	<script src="assets/js/bootstrap-tagsinput.js"></script>

	<!--	Plugin for Fileupload, full documentation here: http://www.jasny.net/bootstrap/javascript/#fileinput   -->
	<script src="assets/js/jasny-bootstrap.min.js"></script>

	<!--    Plugin For Google Maps   -->
	<script  type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAFPQibxeDaLIUHsC6_KqDdFaUdhrbhZ3M"></script>

	<!--    Control Center for Material Kit: activating the ripples, parallax effects, scripts from the example pages etc    -->
	<script src="assets/js/material-kit5438.js?v=1.2.0" type="text/javascript"></script>

	<script type="text/javascript">
		$().ready(function(){

			materialKitDemo.initContactUs2Map();
		});
	</script>


<!-- Mirrored from demos.creative-tim.com/material-kit-pro/sections.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 31 Oct 2017 11:49:13 GMT -->
</html>
