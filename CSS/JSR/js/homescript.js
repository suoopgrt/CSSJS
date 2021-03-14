(function(global){
	var dc = {};
	var httpHtml = "snippets/http-snippet.html";
	// var allCategoriesUrl = "http://davids-restaurant.herokuapp.com/categories.json";
	var allCategoriesUrl = "data/categories.json"


	var categoriesTitleHtml = "snippets/categories-title-snippet.html";
	var categoryHtml = "snippets/category-snippet.html";

	var insertHtml = function(selector, html){
		console.log("insrtHTML "+selector + html);
		var targetElem = document.querySelector(selector);
		targetElem.innerHTML = html;
	};

	var showLoading = function(selector){
		console.log("showLoading "+selector);
		var html = "<div class = 'text-left'>";
		html += "<img src = 'images/ajax-loader.gif'></div>";
		insertHtml(selector,html);
	};

	var insertProperty = function (string, propName, propValue){
		var propToReplace = "{{"+propName+"}}";
		string = string.replace(new RegExp(propToReplace, "g"), propValue);
		return string;
	}
	document.addEventListener("DOMContentLoaded",function(event){
		// showLoading("#HTTPDes");
		$ajaxUtils.sendGetRequest(
			httpHtml, function(responseText){
				console.log("10 : "+responseText);
				document.querySelector("#HTTPDes").innerHTML = responseText;
			}, false);
	
	});
	dc.loadMenuCategories = function () {
		showLoading("#HTTPDes");
		$ajaxUtils.sendGetRequest(allCategoriesUrl, buildAndShowCategoriesHTML);
	};

	function buildAndShowCategoriesHTML(categories){
		$ajaxUtils.sendGetRequest(
			categoriesTitleHtml, function(categoriesTitleHtml){
				$ajaxUtils.sendGetRequest( categoryHtml, function(categoryHtml){
					var categoriesViewHtml = buildCategoriesViewHtml(categories, categoriesTitleHtml, categoryHtml);
	 	 			insertHtml("#HTTPDes", categoriesViewHtml);
				}, false);
		}, false);
	}

	function buildCategoriesViewHtml(categories, categoriesTitleHtml, categoryHtml){
		var finalHtml = categoriesTitleHtml;
		finalHtml += "<section class='row'>";

		for(var i =0; i<categries.length; i++){
			var html = categoryHtml;
			var name = ""+categories[i].name;
			var short_name = categories[i].short_name;
			html = insertProperty(html, "name", name);
			html = insertProperty(html, "short_name",  short_name);
			finalHtml += html;
		}
	}

	global.$dc = dc;
})(window);