(function(global){
	var dc = {};
	var httpHtml = "snippets/http-snippet.html";

	var insertHtml = function(selector, html){
		var targetElem = document.querySelector(selector);
		targetElem.innerHTML = html;
	};

	var showLoading = function(selector){
		var html = "<div class = 'text-left'>";
		html += "<img src = 'images/ajax-loader.gif'></div>";
		insertHtml(selector,html);
	};
	document.addEventListener("DOMContentLoaded",function(event){
		showLoading("#HTTPDes");
		$ajaxUtils.sendGetRequest(
			httpHtml, function(responseText){
				console.log("10 : "+responseText);
				document.querySelector("#HTTPDes").innerHTML = responseText;
			}, false);
	
	});
	global.$dc = dc;
})(window);