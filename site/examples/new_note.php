<!doctype html>
<html lang="en">

<!-- Mirrored from demos.creative-tim.com/material-kit-pro/examples/blog-post.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 31 Oct 2017 11:49:42 GMT -->
<head>
	<meta charset="utf-8" />
	<link rel="apple-touch-icon" sizes="76x76" href="../assets/img/apple-icon.png">
	<link rel="icon" type="image/png" href="../assets/img/favicon.png">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

	<title>New Note</title>

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
    <link href="https://fonts.googleapis.com/css?family=Handlee" rel="stylesheet">
    <script type="text/javascript" src = "../assets/js/functions.js"></script>

    <style>
		  * {
		    font-family: Verdana, Arial, sans-serif;
		  }
		  a:link {
		    color:#000;
		    text-decoration: none;
		  }
		  a:visited {
		    color:#000;
		  }
		  a:hover {
		    color:#33F;
		  }
		  .button {
		    background: -webkit-linear-gradient(top,#008dfd 0,#0370ea 100%);
		    border: 1px solid #076bd2;
		    border-radius: 3px;
		    color: #fff;
		    display: none;
		    font-size: 13px;
		    font-weight: bold;
		    line-height: 1.3;
		    padding: 8px 25px;
		    text-align: center;
		    text-shadow: 1px 1px 1px #076bd2;
		    letter-spacing: normal;
		  }
		  .center {
		    padding: 10px;
		    text-align: center;
		  }
		  .final {
		    color: black;
		    padding-right: 3px; 
		  }
		  .interim {
		    color: gray;
		  }
		  .info {
		    font-size: 14px;
		    text-align: center;
		    color: #777;
		    display: none;
		  }
		  .right {
		    float: right;
		  }
		  .sidebyside {
		    display: inline-block;
		    width: 45%;
		    min-height: 40px;
		    text-align: left;
		    vertical-align: top;
		  }
		  #headline {
		    font-size: 40px;
		    font-weight: 300;
		  }
		  #info {
		    font-size: 20px;
		    text-align: center;
		    color: #777;
		    visibility: hidden;
		  }
		  #results {
		    font-size: 14px;
		    font-weight: bold;
		    border: 1px solid #ddd;
		    
		    text-align: left;
		    min-height: 150px;

		    
			overflow:hidden;
			background-color:#FFF;
			color:#222;
			font-family: Handlee, cursive;
			font-weight:normal;
			font-size:24px;
			resize:none;
			line-height:40px;
			padding-left:100px;
			padding-right:100px;
			padding-top:45px;
			padding-bottom:34px;
			background-image:url(https://static.tumblr.com/maopbtg/E9Bmgtoht/lines.png), url(https://static.tumblr.com/maopbtg/nBUmgtogx/paper.png);
			background-repeat:repeat-y, repeat;
			-webkit-border-radius:12px;
			border-radius:12px;
			
			
			border-top:1px solid #FFF;
			border-bottom:1px solid #FFF;
		  }

		  
		  #start_button {
		    border: 0;
		    background-color:transparent;
		    padding: 0;
		  }
		</style>

		<script type="text/javascript">
			
		</script>
</head>

<body class="blog-post">

	<nav class="navbar navbar-primary navbar-transparent navbar-absolute">
    	<div class="container">
        	<!-- Brand and toggle get grouped for better mobile display -->
        	<div class="navbar-header">
        		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation-example">
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

	<div class="page-header header-filter" data-parallax="true" style="background-image: url('../assets/img/bg5.jpg');" style = "max-height: 500px;">
		<div class="container">
			<div class="row">
				<div class="col-md-8 col-md-offset-2 text-center">
					<h1 class="title">Take easy notes with our hassel free interface.</h1>
					<h4>Type in the title and you're ready to rock!</h4>
					<br />
					<div class="card card-raised card-form-horizontal">
	        						<div class="card-content">
	        							<form method="" action="#">
	        								<div class="row">
	        									<div class="col-sm-8">

	        										<div class="input-group">
	        											<span class="input-group-addon">
	        												<i class="material-icons">add</i>
	        											</span>
	        											<input id = "titName" type="email" value="" placeholder="The Title..." class="form-control" />
	        										</div>
	        									</div>
	        									<div class="col-sm-4">
	        										<a href = "#slo" ><button id  = "slo" type="button" class="btn btn-primary btn-block" onclick="startButton(event)">Start Noting!</button></a>
	        									</div>
	        								</div>
	        							</form>
	        						</div>
	        					</div> 
				</div>


			</div>


		</div>
	</div>



	<div class="main main-raised">
		<div class="container">
            <div class="section section-text">
                <div class="row">
    				<div class="col-md-8 col-md-offset-2">
        				

<!----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->



						
  
			<div id="info">
			  <p id="info_start" class = "title"></p>
			  <p id="info_speak_now" class = "theme-m ">Recording Notes.</p>
			  <p id="info_no_speech">No speech was detected. You may need to adjust your
			    <a href="//support.google.com/chrome/bin/answer.py?hl=en&amp;answer=1407892">
			      microphone settings</a>.</p>
			  <p id="info_no_microphone" style="display:none">
			    No microphone was found. Ensure that a microphone is installed and that
			    <a href="//support.google.com/chrome/bin/answer.py?hl=en&amp;answer=1407892">
			    microphone settings</a> are configured correctly.</p>
			  <p id="info_allow">Click the "Allow" button above to enable your microphone.</p>
			  <p id="info_denied">Permission to use microphone was denied.</p>
			  <p id="info_blocked">Permission to use microphone is blocked. To change,
			    go to chrome://settings/contentExceptions#media-stream</p>
			  <p id="info_upgrade">Web Speech API is not supported by this browser.
			     Upgrade to <a href="//www.google.com/chrome">Chrome</a>
			     version 25 or later.</p>
			</div>
			<div class="right">
			  <button id="start_button" >
			    <img id="start_img" src="mic.gif" alt=""></button>
			</div>
			<div id="results">
			  <span id="final_span" class="final" style="font-family: Handlee, cursive;"></span>
			  <span id="interim_span" class="interim" style = "font-family: Handlee, cursive;"></span>
			
			  <p>
			</div>
			<div class="center">
			  <!--<div class="sidebyside" style="text-align:right">
			    <button id="copy_button" class="button" onclick="copyButton()">
			      Copy and Paste</button>
			    <div id="copy_info" class="info">
			      Press Control-C to copy text.<br>(Command-C on Mac.)
			    </div>
			  </div>
			  <div class="sidebyside">
			    <button id="email_button" class="button" onclick="emailButton()">
			      Create Email</button>
			    <div id="email_info" class="info">
			      Text sent to default email application.<br>
			      (See chrome://settings/handlers to change.)
			    </div>
			  </div>

			-->
			  <p>
			  <div class="">

			  	<div class="theme-row">

			  		<button id = "stopr" class="btn btn-primary btn-round theme-right theme-red" onclick = "feedNotes(document.getElementById('titName').value ,document.getElementById('final_span').innerHTML)" style = "margin-right: 65px">
								<i class="material-icons">stop</i> End
							</button>
			  	</div>
									
			  <div id="div_language theme-row ">



			    <select  class="selectpicker col-lg-5 col-md-6 col-sm-3" data-style="btn btn-primary btn-round" title="English" data-size="7" id="select_language" onchange="updateCountry()"></select>
			    &nbsp;&nbsp;
			    <select class="selectpicker col-lg-5 col-md-6 col-sm-3" data-style="btn btn-primary btn-round" title="United States" data-size="7" id="select_dialect"></select>
			  </div>
			</div>
			</div>


		<script>
			var langs =
			[['Afrikaans',       ['af-ZA']],
			 ['Bahasa Indonesia',['id-ID']],
			 ['Bahasa Melayu',   ['ms-MY']],
			 ['Català',          ['ca-ES']],
			 ['Čeština',         ['cs-CZ']],
			 ['Deutsch',         ['de-DE']],
			 ['English',         ['en-AU', 'Australia'],
			                     ['en-CA', 'Canada'],
			                     ['en-IN', 'India'],
			                     ['en-NZ', 'New Zealand'],
			                     ['en-ZA', 'South Africa'],
			                     ['en-GB', 'United Kingdom'],
			                     ['en-US', 'United States']],
			 ['Español',         ['es-AR', 'Argentina'],
			                     ['es-BO', 'Bolivia'],
			                     ['es-CL', 'Chile'],
			                     ['es-CO', 'Colombia'],
			                     ['es-CR', 'Costa Rica'],
			                     ['es-EC', 'Ecuador'],
			                     ['es-SV', 'El Salvador'],
			                     ['es-ES', 'España'],
			                     ['es-US', 'Estados Unidos'],
			                     ['es-GT', 'Guatemala'],
			                     ['es-HN', 'Honduras'],
			                     ['es-MX', 'México'],
			                     ['es-NI', 'Nicaragua'],
			                     ['es-PA', 'Panamá'],
			                     ['es-PY', 'Paraguay'],
			                     ['es-PE', 'Perú'],
			                     ['es-PR', 'Puerto Rico'],
			                     ['es-DO', 'República Dominicana'],
			                     ['es-UY', 'Uruguay'],
			                     ['es-VE', 'Venezuela']],
			 ['Euskara',         ['eu-ES']],
			 ['Français',        ['fr-FR']],
			 ['Galego',          ['gl-ES']],
			 ['Hrvatski',        ['hr_HR']],
			 ['IsiZulu',         ['zu-ZA']],
			 ['Íslenska',        ['is-IS']],
			 ['Italiano',        ['it-IT', 'Italia'],
			                     ['it-CH', 'Svizzera']],
			 ['Magyar',          ['hu-HU']],
			 ['Nederlands',      ['nl-NL']],
			 ['Norsk bokmål',    ['nb-NO']],
			 ['Polski',          ['pl-PL']],
			 ['Português',       ['pt-BR', 'Brasil'],
			                     ['pt-PT', 'Portugal']],
			 ['Română',          ['ro-RO']],
			 ['Slovenčina',      ['sk-SK']],
			 ['Suomi',           ['fi-FI']],
			 ['Svenska',         ['sv-SE']],
			 ['Türkçe',          ['tr-TR']],
			 ['български',       ['bg-BG']],
			 ['Pусский',         ['ru-RU']],
			 ['Српски',          ['sr-RS']],
			 ['한국어',            ['ko-KR']],
			 ['中文',             ['cmn-Hans-CN', '普通话 (中国大陆)'],
			                     ['cmn-Hans-HK', '普通话 (香港)'],
			                     ['cmn-Hant-TW', '中文 (台灣)'],
			                     ['yue-Hant-HK', '粵語 (香港)']],
			 ['日本語',           ['ja-JP']],
			 ['Lingua latīna',   ['la']]];
			for (var i = 0; i < langs.length; i++) {
			  select_language.options[i] = new Option(langs[i][0], i);
			}
			select_language.selectedIndex = 6;
			updateCountry();
			select_dialect.selectedIndex = 6;
			showInfo('info_start');
			function updateCountry() {
			  for (var i = select_dialect.options.length - 1; i >= 0; i--) {
			    select_dialect.remove(i);
			  }
			  var list = langs[select_language.selectedIndex];
			  for (var i = 1; i < list.length; i++) {
			    select_dialect.options.add(new Option(list[i][1], list[i][0]));
			  }
			  select_dialect.style.visibility = list[1].length == 1 ? 'hidden' : 'visible';
			}
			var create_email = false;
			var final_transcript = '';
			var recognizing = false;
			var ignore_onend;
			var start_timestamp;
			if (!('webkitSpeechRecognition' in window)) {
			  upgrade();
			} else {
			  start_button.style.display = 'inline-block';
			  var recognition = new webkitSpeechRecognition();
			  recognition.continuous = true;
			  recognition.interimResults = true;
			  recognition.onstart = function() {
			    recognizing = true;
			    showInfo('info_speak_now');
			    start_img.src = 'mic-animate.gif';
			  };
			  recognition.onerror = function(event) {
			    if (event.error == 'no-speech') {
			      start_img.src = 'mic.gif';
			      showInfo('info_no_speech');
			      ignore_onend = true;
			    }
			    if (event.error == 'audio-capture') {
			      start_img.src = 'mic.gif';
			      showInfo('info_no_microphone');
			      ignore_onend = true;
			    }
			    if (event.error == 'not-allowed') {
			      if (event.timeStamp - start_timestamp < 100) {
			        showInfo('info_blocked');
			      } else {
			        showInfo('info_denied');
			      }
			      ignore_onend = true;
			    }
			  };
			  recognition.onend = function() {
			    recognizing = false;
			    if (ignore_onend) {
			      return;
			    }
			    start_img.src = 'mic.gif';
			    if (!final_transcript) {
			      showInfo('info_start');
			      return;
			    }
			    showInfo('');
			    if (window.getSelection) {
			      window.getSelection().removeAllRanges();
			      var range = document.createRange();
			      range.selectNode(document.getElementById('final_span'));
			      window.getSelection().addRange(range);
			    }
			    if (create_email) {
			      create_email = false;
			      createEmail();
			    }
			  };
			  recognition.onresult = function(event) {
			    var interim_transcript = '';
			    for (var i = event.resultIndex; i < event.results.length; ++i) {
			      if (event.results[i].isFinal) {
			        final_transcript += event.results[i][0].transcript;
			// This is the line where the dump happens 
			        final_transcript += ".";
			      } else {
			        interim_transcript += event.results[i][0].transcript;
			      }
			    }
			    
			    final_span.innerHTML = linebreak(final_transcript);
			    interim_span.innerHTML = linebreak(interim_transcript);
			    if (final_transcript || interim_transcript) {
			      showButtons('inline-block');
			    }
			  };
			}
			function upgrade() {
			  start_button.style.visibility = 'hidden';
			  showInfo('info_upgrade');
			}
			var two_line = /\n\n/g;
			var one_line = /\n/g;
			function linebreak(s) {
			  return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
			}
			var first_char = /\S/;
			function capitalize(s) {
			  return s.replace(first_char, function(m) { return m.toUpperCase(); });
			}
			function createEmail() {
			  var n = final_transcript.indexOf('\n');
			  if (n < 0 || n >= 80) {
			    n = 40 + final_transcript.substring(40).indexOf(' ');
			  }
			  var subject = encodeURI(final_transcript.substring(0, n));
			  var body = encodeURI(final_transcript.substring(n + 1));
			  window.location.href = 'mailto:?subject=' + subject + '&body=' + body;
			}
			function copyButton() {
			  if (recognizing) {
			    recognizing = false;
			    recognition.stop();
			  }
			  copy_button.style.display = 'none';
			  copy_info.style.display = 'inline-block';
			  showInfo('');
			}
			function emailButton() {
			  if (recognizing) {
			    create_email = true;
			    recognizing = false;
			    recognition.stop();
			  } else {
			    createEmail();
			  }
			  email_button.style.display = 'none';
			  email_info.style.display = 'inline-block';
			  showInfo('');
			}
			function startButton(event) {
			  if (recognizing) {
			    recognition.stop();
			    return;
			  }
			  final_transcript = '';
			  recognition.lang = select_dialect.value;
			  recognition.start();
			  ignore_onend = false;
			  final_span.innerHTML = '';
			  interim_span.innerHTML = '';
			  start_img.src = 'mic-slash.gif';
			  showInfo('info_allow');
			  showButtons('none');
			  start_timestamp = event.timeStamp;

			}
			function showInfo(s) {
			  if (s) {
			    for (var child = info.firstChild; child; child = child.nextSibling) {
			      if (child.style) {
			        child.style.display = child.id == s ? 'inline' : 'none';
			      }
			    }
			    info.style.visibility = 'visible';
			  } else {
			    info.style.visibility = 'hidden';
			  }
			}
			var current_style;
			function showButtons(style) {
			  if (style == current_style) {
			    return;
			  }
			  current_style = style;
			  copy_button.style.display = style;
			  email_button.style.display = style;
			  copy_info.style.display = 'none';
			  email_info.style.display = 'none';
			}
			</script>





<!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ -->



    					

						<blockquote>
							<p>
								“And thank you for turning my personal jean jacket into a couture piece.”
							</p>
							<small>
							Kanye West, Producer.
							</small>
						</blockquote>
					</div>

					<div class="section col-md-10 col-md-offset-1">
						<div class="col-md-4">
							<img class="img-rounded img-responsive img-raised" alt="Raised Image" src="../assets/img/examples/blog4.jpg">
						</div>
						<div class="col-md-4">
							<img class="img-rounded img-responsive img-raised" alt="Raised Image" src="../assets/img/examples/blog3.jpg">
						</div>
						<div class="col-md-4">
							<img class="img-rounded img-responsive img-raised" alt="Raised Image" src="../assets/img/examples/blog1.jpg">
						</div>
					</div>

					

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

<!-- Mirrored from demos.creative-tim.com/material-kit-pro/examples/blog-post.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 31 Oct 2017 11:49:59 GMT -->
</html>
