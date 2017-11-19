<?php

	include '../assets/php/conn.php';

	session_start();





	$c = 0;


	$result = $db->query("SELECT * FROM notes  ORDER BY `time` DESC");
	if($result->num_rows){
		while($row = $result->fetch_object()){
			$c++;
			$notes[] = $row;
		}

		$result->free();
	}

?>


<!doctype html>

<html lang="en">

<!-- Mirrored from demos.creative-tim.com/material-kit-pro/examples/profile-page.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 31 Oct 2017 15:18:01 GMT -->
<head>
	<meta charset="utf-8" />
	<link rel="apple-touch-icon" sizes="76x76" href="../assets/img/apple-icon.png">
	<link rel="icon" type="image/png" href="../assets/img/favicon.png">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

	<title>Notebook</title>

	<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />

	<!-- Canonical SEO -->
	<link rel="canonical" href="http://www.creative-tim.com/product/material-kit-pro" />

	<!--     Fonts and icons     -->
	<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />

	<!-- CSS Files -->
    <link href="../assets/css/bootstrap.min.css" rel="stylesheet" />
    <link href="../assets/css/material-kit5438.css?v=1.2.0" rel="stylesheet"/>
    <link href="../assets/css/daddy.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet">
    <script type="text/javascript" src = "../assets/js/functions.js"></script>
</head>

<body class="profile-page">
	<nav class="navbar navbar-primary navbar-transparent navbar-fixed-top navbar-color-on-scroll">
    	<div class="container">
        	<!-- Brand and toggle get grouped for better mobile display -->
        	<div class="navbar-header">
        		<button type="button" class="navbar-toggle" data-toggle="collapse">
            		<span class="sr-only">Toggle navigation</span>
		            <span class="icon-bar"></span>
		            <span class="icon-bar"></span>
		            <span class="icon-bar"></span>
        		</button>
        		<a class="navbar-brand" href="../index.php"><img  style="max-height: 40px" src="../assets/img/euler.png"></a>
        	</div>

        	<div class="collapse navbar-collapse">
        		<ul class="nav navbar-nav navbar-right">
    				<li class="button-container theme-margin-right">
						<a href="notebook.php" class="btn btn-rose btn-round">
							<i class="material-icons">apps</i> NOTEBOOK
						</a>
					</li>

					

					<li class="button-container">
						<a href="new_note.php" class="btn btn-rose btn-round">
							<i class="material-icons theme-xlarge">note_add</i> ADD NOTES
						</a>
					</li>
        		</ul>
        	</div>
    	</div>
    </nav>


	<div class="page-header header-filter" data-parallax="true" style="background-image: url('../assets/img/examples/city.jpg');"></div>

	<div class="main main-raised">
		<div class="profile-content">
            <div class="container">

                <div class="row">
	                <div class="col-xs-6 col-xs-offset-3">
        	           <div class="profile">
	                        <div class="avatar">
	                            <img src="../assets/img/placeholder.jpg" alt="Circle Image" class="img-circle img-responsive img-raised">
	                        </div>
	                        <div class="name">
	                            <h3 class="title">Test User</h3>
								<h6>Second Year</h6>
								
	                        </div>
	                    </div>
    	            </div>
                    <div class="col-xs-2 follow">
	                   <button class="btn btn-fab btn-primary" rel="tooltip" title="Create a new note">
                            <i class="material-icons">add</i>
                        </button>
	                </div>
                </div>


                <!--<div class="description text-center">
                    <p>An artist of considerable range, Chet Faker — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. </p>
                </div>
            -->

				<div class="row">
					<div class="col-md-6 col-md-offset-3">
						<div class="profile-tabs">
		                    <div class="nav-align-center">
								<ul class="nav nav-pills nav-pills-icons" role="tablist">
									<li class="active">
			                            <a href="#work" role="tab" data-toggle="tab">
											<i class="material-icons">speaker_notes</i>
											Summaries
			                            </a>
			                        </li>
                                    <li>
										<a href="#connections" role="tab" data-toggle="tab">
											<i class="material-icons">note</i>
											Text Notes
										</a>
									</li>
									<li>
										<a href="#media" role="tab" data-toggle="tab">
											<i class="material-icons">search</i>
			                                Search
			                            </a>
									</li>
			                        
			                    </ul>


							</div>
						</div>
						<!-- End Profile Tabs -->
					</div>
                </div>





                <div class="tab-content">
			        <div class="tab-pane active work" id="work">
				        <div class="row">
	                        <div class="col-md-7 col-md-offset-1">
		                        <h3 class="title"> <i class="material-icons">watch_later</i></h4>
		                        <div class="row collections">
			                        
			                        <?php 

			                        	$nu = 0;

                						foreach ($notes as $n) {
                							if ($nu < 2) {
                								$nu++;
                							# code...
                						


               						 ?>


			                        <div class="col-md-6"> 
			                            <div class="card card-background" style="">
                    						<a href="#pablo"></a>
                    						<div class="card-content">
                    							<label class="label label-primary"><?php echo $n->time; ?></label>
                    							<a href="#pablo">
                    								<h2 data-toggle = "modal" data-target = "#myModal<?php echo $n->id;?>" class="card-title"><?php echo $n->title; ?></h2>
                    							</a>

                    							<ul class="list-unstyled" style="font-family: 'Comfortaa', cursive;"><b>


                    							<?php

            										 

													//echo $keywords; 

													$arr =  explode(" ", $n->keywords);
													$c = 0;

													foreach ($arr as $v) {
														if ($c < 3) {
															$c++;

												?>


            										
            										<li><?php echo $v; ?></li>

            									<?php

            										} else {break;} } 

            									?>

            								</b></ul>


                    						</div>
                    					</div>
			                        </div>

			                        <?php
			                        		}

			                        	}

			                        ?>


                                    

                                    
                                    
                                </div>

                                <hr class = "theme-black theme-m">

                                <h5 class = "theme-center"> Your Summaries </h5>
                                <h5>&nbsp;</h5>

                                <?php 

			                        	$nu = 0;

                						foreach ($notes as $n) {
                							
                							# code...
                						


               					?>

                                <div class="card card-raised card-form-horizontal">
	        						<div class="card-content">
	        							<form method="" action="#">
	        								<div class="row">
	        									<div class="col-sm-8">

	        										<div class="input-group">
	        											<span class="input-group-addon">
	        												<i class="material-icons">trending_flat</i>
	        											</span>
	        											<h5> <?php echo $n->title; ?> <span class = "theme-right theme-s theme-opacity"><?php echo @date('d-m-Y',$n->time); ?></span></h5>
	        										</div>
	        									</div>
	        									<div class="col-sm-4">
	        										<button type="button" class="btn btn-primary btn-block" data-toggle = "modal" data-target = "#myModal<?php echo $n->id;?>">View</button>
	        									</div>
	        								</div>
	        							</form>
	        						</div>
	        					</div>



	        					

								<?php

									}
								?>


	        						



		                    </div>
		                    <div class="col-md-2 col-md-offset-1 stats">
			                    <h4 class="title">Stats</h4>
			                    <ul class="list-unstyled">
				                    <li><b>60</b> Sub Topics</li>
				                    <li><b>4</b> Topics</li>
				                    <li><b>331</b> Links</li>

				                </ul>
				                <hr />
				                <!-- <h4 class="title">About his Work</h4>
				                <p class="description">French luxury footwear and fashion. The footwear has incorporated shiny, red-lacquered soles that have become his signature.</p>
				                <hr />
				                <h4 class="title">Focus</h4>
				                <span class="label label-primary">Footwear</span>
				                <span class="label label-rose">Luxury</span> -->
			                </div>
	                    </div>
			        </div>
                    <div class="tab-pane connections" id="connections">
                    	
						<?php

							if ($c > 0) {
					    	foreach ($notes as $s){ 

                    	?>

                        <div class="row ">
            				<div class="col-md-5 col-md-offset-1 ">
            					<div class="card card-profile card-plain">
            						<div class="col-md-5">
            							<div class="card-image  theme-center">
            								<img class="img" src="../assets/img/image_placeholder.jpg" />
            								<a href = "../edit.php"> <button onclick = "idChanger(<?php echo $s->id ?>)" type="button" class="btn btn-primary btn-block">View</button></a>
            							</div>
            						</div>
            						<div class="col-md-7">
            							<div class="card-content">
            								<h3 class="card-title"><?php echo $s->title; ?></h3>
            								

            								<p class="card-description">
            									<ul class="list-unstyled">
            										<li>Link 1</li>
            										<li> Link 2 </li>
            										
            									</ul>
            								</p>
            							</div>
            						</div>
            					</div>
            				</div>

            				<div class="col-md-5">
            					<div class="card card-profile card-plain">
            						<div class="col-md-5">
            							<div class="card-content">
            								<ul class="list-unstyled" style="font-family: 'Comfortaa', cursive;"><b>
            									<li>&nbsp;</li>	
            									<?php

            										 

													//echo $keywords; 

													$arr =  explode(" ", $s->keywords);
													$c = 0;

													foreach ($arr as $v) {
														if ($c < 5) {
															$c++;

												?>


            										
            										<li><?php echo $v; ?></li>

            									<?php

            										} else {break;} } 

            									?>

            										
            										....</b>
            									</ul>
            								
            							</div>
            						</div>
            						<div class="col-md-7">
            							<div class="card-content">
            								
            								<p class="card-description">
            									<a href="#pablo">
            									<h6 class="category text-muted theme-s">12-05-2017</h6>
            								</a>

            								<div class="col-sm-2 theme-left">
	        										
	        									</div>
            									
            								</p>
            							</div>
            						</div>
            					</div>
            				</div>


                        </div>

                        <?php

                        	}

                        }


                        ?>



                        
                    </div>
                    <div class="tab-pane  gallery" id="media">
						<div class="row">
							<div class="col-md-offset-2 col-md-8">

								
									<div class="form-group label-floating">
										<label class="control-label">With Floating Label</label>
										<input onclick="this.select()" onKeyDown="if(event.keyCode==13) startSearch(this.value);" type="email" class="form-control">
									</div>


									<?php

										if (isset($_SESSION['str_to_search']) && !empty($_SESSION['str_to_search'])) {

											$strt = $_SESSION['str_to_search'];

											//echo "SELECT * FROM notes where data like '%$strt%'";

										$results = $db->query("SELECT * FROM notes where data like '%$strt%' ");
										if($results->num_rows){
											while($row = $results->fetch_object()){
												$c++;
												$s_result[] = $row;
											}

											$results->free();

										}
										}


										foreach ($s_result as $s) {
											# code...
										


									?>

									<div class="row ">
            				<div class="col-md-5 col-md-offset-1 ">
            					<div class="card card-profile card-plain">
            						<div class="col-md-5">
            							<div class="card-image  theme-center">
            								<img class="img" src="../assets/img/image_placeholder.jpg" />
            								<a href = "../edit.php"> <button onclick = "idChanger(<?php echo $s->id ?>)" type="button" class="btn btn-primary btn-block">View</button></a>
            							</div>
            						</div>
            						<div class="col-md-7">
            							<div class="card-content">
            								<h3 class="card-title"><?php echo $s->title; ?></h3>
            								

            								<p class="card-description">
            									<ul class="list-unstyled">
            										<li>Link 1</li>
            										<li> Link 2 </li>
            										
            									</ul>
            								</p>
            							</div>
            						</div>
            					</div>
            				</div>

            				<div class="col-md-5">
            					<div class="card card-profile card-plain">
            						<div class="col-md-5">
            							<div class="card-content">
            								<ul class="list-unstyled" style="font-family: 'Comfortaa', cursive;"><b>
            									<li>&nbsp;</li>	
            									<?php

            										 

													//echo $keywords; 

													$arr =  explode(" ", $s->keywords);
													$c = 0;

													foreach ($arr as $v) {
														if ($c < 5) {
															$c++;

												?>


            										
            										<li><?php echo $v; ?></li>

            									<?php

            										} else {break;} } 

            									?>

            										
            										....</b>
            									</ul>
            								
            							</div>
            						</div>
            						<div class="col-md-7">
            							<div class="card-content">
            								
            								<p class="card-description">
            									<a href="#pablo">
            									<h6 class="category text-muted theme-s">12-05-2017</h6>
            								</a>

            								<div class="col-sm-2 theme-left">
	        										
	        									</div>
            									
            								</p>
            							</div>
            						</div>
            					</div>
            				</div>


                        </div>

                        <?php

                        	}

                        


                        ?>
								
								
							</div>
						</div>
                    </div>
			    </div>
            </div>
        </div>
	</div>


    <footer class="footer">
        <div class="container">
            <nav class="pull-left">
				
            </nav>
            <div class="copyright pull-right">
                made with <i class="fa fa-heart heart"></i> by Ain't nobody got time for that.
            </div>
        </div>
    </footer>


    <?php

    	foreach ($notes as $n) {
    		# code...
    	

    ?>

    <div class="modal fade" id="myModal<?php echo $n->id;?>" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
						<i class="material-icons">clear</i>
					</button>
					<h4 class="modal-title"><?php echo $n->title; ?></h4>
				</div>
				<div class="modal-body">
					<p><?php echo $n->summary?>
					</p>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-simple">Nice Button</button>
					<button type="button" class="btn btn-danger btn-simple" data-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>

	<?php

		}

	?>


</body>
	<!--   Core JS Files   -->
	<script src="../assets/js/jquery.min.js" type="text/javascript"></script>
	<script src="../assets/js/bootstrap.min.js" type="text/javascript"></script>
	<script src="../assets/js/material.min.js"></script>

	<!--    Plugin for Date Time Picker and Full Calendar Plugin   -->
	<script src="../assets/js/moment.min.js"></script>

	<!--	Plugin for the Sliders, full documentation here: http://refreshless.com/nouislider/   -->
	<script src="../assets/js/nouislider.min.js" type="text/javascript"></script>

	<!--	Plugin for the Datepicker, full documentation here: https://github.com/Eonasdan/bootstrap-datetimepicker   -->
	<script src="../assets/js/bootstrap-datetimepicker.js" type="text/javascript"></script>

	<!--	Plugin for Select, full documentation here: http://silviomoreto.github.io/bootstrap-select   -->
	<script src="../assets/js/bootstrap-selectpicker.js" type="text/javascript"></script>

	<!--	Plugin for Tags, full documentation here: http://xoxco.com/projects/code/tagsinput/   -->
	<script src="../assets/js/bootstrap-tagsinput.js"></script>

	<!--	Plugin for Fileupload, full documentation here: http://www.jasny.net/bootstrap/javascript/#fileinput   -->
	<script src="../assets/js/jasny-bootstrap.min.js"></script>

	<!--    Plugin For Google Maps   -->
	<script  type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAFPQibxeDaLIUHsC6_KqDdFaUdhrbhZ3M"></script>

	<!--    Control Center for Material Kit: activating the ripples, parallax effects, scripts from the example pages etc    -->
	<script src="../assets/js/material-kit5438.js?v=1.2.0" type="text/javascript"></script>

<!-- Mirrored from demos.creative-tim.com/material-kit-pro/examples/profile-page.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 31 Oct 2017 15:19:20 GMT -->
</html>
