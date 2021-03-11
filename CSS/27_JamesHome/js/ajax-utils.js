(function(mywin){
	var ajaxUtils = {};
	ajaxUtils.sendGetRequest = function(requestUrl, responseHandler, isJsonResponse){
		var request = getRequestObject();
		console.log(request);
		console.log("URL : "+requestUrl);
		request.onreadystatechange = function() {
			console.log("In the 5 funcion");
			handleResponse(request, responseHandler, isJsonResponse);
		};
		request.open("GET", requestUrl, true);
		request.send(null);
	};

	// returns an HTTP request object
	function getRequestObject(){
		console.log("In the getRequestObject");
		if(window.XMLHttpRequest){
			console.log("In the if condition");
			return(new XMLHttpRequest());
		}
		else if(window.ActiveXObject){
			return (new ActiveXObject("Microsoft.XMLHTTP"));
		}else{
			mywin.alert("Ajax is not supported!");
			return(null);
		}
	}

	function handleResponse(request, responseHandler, isJsonResponse){
		
		console.log("In the Handle response");

		if((request.readyState==4) && (request.status==200)){
			if(isJsonResponse == undefined){
				isJsonResponse = true;
			}
			if(isJsonResponse){
				console.log("If readystatus is 4");
				responseHandler(JSON.parse(request.responseText));				
			}else{
				responseHandler(request.responseText);
			}

		}
	}
	mywin.$ajaxUtils = ajaxUtils;

})(window);
