var url_str = "";
$( document ).ready(function() {

	
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){

		var url_str = tabs[0].url;
   		
		if(url_str.indexOf("?euler_id=")!=-1){
			var res = url_str.split("?euler_id=");
			if(res[1]){
				
				$("#like").click(function(){
					var url_go = "http://localhost/site/assets/php/positive.php";
				    $.ajax({
			           type: "POST",
			           url: url_go,
			           data: {value: res[1]},
			           
			           
			      });
				});

				$("#dislike").click(function(){
					var url_go = "http://localhost/site/assets/php/negative.php";
				    $.ajax({
			           type: "POST",
			           url: url_go,
			           data: {value: res[1]},
			           
			           
			      });
				});
						
			}

		}


	   
	});
    
});





