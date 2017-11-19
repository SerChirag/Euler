function feedNotes(title , str) {

	if(window.XMLHttpRequest)
		var xmlhttp = new XMLHttpRequest();
	else
		var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

	xmlhttp.onreadystatechange = function(){
		if((this.readyState == 4) && (this.status == 200)){
			if(this.responseText == 1){
				document.getElementById('final_span').innerHTML = '';
				document.getElementById('interim_span').innerHTML = '';
				document.getElementById('titName').value = '';
				
			}
			else
				alert(this.responseText);
				
		}
	};

	xmlhttp.open("POST", "../assets/php/insert_notes.php");
	xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xmlhttp.send("title="+title+"&notes="+str);

	startButton(event);

}


function updateNoteSummary(ide , str) {

	

	if(window.XMLHttpRequest)
		var xmlhttp = new XMLHttpRequest();
	else
		var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

	xmlhttp.onreadystatechange = function(){
		if((this.readyState == 4) && (this.status == 200)){
			if(this.responseText == 1){
				;				
			}
			else
				alert(this.responseText);
				
		}
	};

	xmlhttp.open("POST", "assets/php/update_summary.php");
	xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xmlhttp.send("ide="+ide+"&notes="+str);


}


function updateNoteData(ide , str) {

	

	if(window.XMLHttpRequest)
		var xmlhttp = new XMLHttpRequest();
	else
		var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

	xmlhttp.onreadystatechange = function(){
		if((this.readyState == 4) && (this.status == 200)){
			if(this.responseText == 1){
				;				
			}
			else
				alert(this.responseText);
				
		}
	};

	xmlhttp.open("POST", "assets/php/update_data.php");
	xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xmlhttp.send("ide="+ide+"&notes="+str);


}

function idChanger(ide) {

	

	if(window.XMLHttpRequest)
		var xmlhttp = new XMLHttpRequest();
	else
		var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

	xmlhttp.onreadystatechange = function(){
		if((this.readyState == 4) && (this.status == 200)){
			if(this.responseText != 4){
				;			
			}
			else
				alert(this.responseText);
				
		}
	};

	xmlhttp.open("POST", "../assets/php/id_changer.php");
	xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xmlhttp.send("ide="+ide);


}



function startSearch(str) {

	//alert(str);

	if(window.XMLHttpRequest)
		var xmlhttp = new XMLHttpRequest();
	else
		var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

	xmlhttp.onreadystatechange = function(){
		if((this.readyState == 4) && (this.status == 200)){
			if(this.responseText != 4){
				window.location.href = "notebook.php";
			}
			else
				alert(this.responseText);
				
		}
	};

	xmlhttp.open("POST", "../assets/php/search_setter.php");
	xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xmlhttp.send("str="+str);

}