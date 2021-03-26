(function(global){
	var dc = {};
	var httpHtml = "snippets/http-snippet.html";
	var mainHtml = "snippets/main.html";
	var JSItemsTitleHtml = "snippets/JS-items-title.html";
	var JSItemsHtml = "snippets/JS-items.html";
//  var allCategoriesUrl = "http://davids-restaurant.herokuapp.com/categories.json";
	var allCategoriesUrl = "data/categories.json"
	var JSUrl = "data/json-category="
//	var menuItemsUrl ="https://davids-restaurant.herokuapp.com/menu_items.json?category=";
	var canvasUrl = "data/canvas-items.json";



	var categoriesTitleHtml = "snippets/categories-title-snippet.html";
	var categoryHtml = "snippets/category-snippet.html";

	var jsTitleHtml = "snippets/JS-title.html";
	var jsHtml = "snippets/JS-main.html";

	var canvastitlehtml = "snippets/canvas-title.html";
	var canvasitemHtml = "snippets/canvas-item.html";

	var insertHtml = function(selector, html){
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
	 	showLoading("#HTTPDes");
		$ajaxUtils.sendGetRequest(
			mainHtml, function(responseText){
				document.querySelector("#HTTPDes").innerHTML = responseText;
			}, false);
	
	});
	dc.loadJS = function () {
		showLoading("#HTTPDes");
		$ajaxUtils.sendGetRequest(allCategoriesUrl, buildAndShowJSHTML);
	};

	dc.loadJSItems = function(categoryShort){
		showLoading("#HTTPDes");
		$ajaxUtils.sendGetRequest(JSUrl+categoryShort, buildAndShowJSItemHtml);
	}


	dc.loadCanvasItems = function(categoryShort){
		showLoading("#HTTPDes");
		$ajaxUtils.sendGetRequest(
				canvasUrl, buildAndShowCanvasItemsHTML
			);
	}

	dc.loadReact = function () {
		showLoading("#HTTPDes");
		$ajaxUtils.sendGetRequest(allCategoriesUrl, buildAndShowJSHTML);
	};

	function buildAndShowCanvasItemsHTML(categoryCanvasItems){
		$ajaxUtils.sendGetRequest(
				canvastitlehtml, function(canvastitlehtml){
					$ajaxUtils.sendGetRequest(canvasitemHtml, function(canvasItem){
						switchCanvasToActive();
						var canvasItemViewHtml = 
						buildCanvasItemsViewhtml(categoryCanvasItems,canvastitlehtml, canvasItem);
						insertHtml("HTTPDes", canvasItemViewHtml);
					}, false);
				}, false );
	}
	function buildAndShowJSItemHtml(jsItem){
		$ajaxUtils.sendGetRequest(
			JSItemsTitleHtml, function(JSItemsTitleHtml){
				$ajaxUtils.sendGetReqeust(JSItemsHtml, function(JSItemsHtml){
					switchJStoActive();
					var JSItemsViewHtml = buildJSItemsViewHtml(jsItem, JSItemsTitleHtml, JSItemsHtml);
					insertHtml("#HTTPDes", JSItemsViewHtml);
				}, false );
			}, false );
	}

	function buildJSItemsViewHtml(jsItem, JSItemsTitleHtml, JSItemsHtml){
		JSItemsTitleHtml = insertProperty(JSItemsTitleHtml, "name", jsItem.category.name);
		JSItemsTitleHtml = insertProperty(JSItemsTitleHtml, "special_about", jsItem.category.special_about);

	}

	function switchJStoActive(){
		  var classes = document.querySelector("#navHomeButton").className;
		  classes = classes.replace(new RegExp("active", "g"), "");
		  document.querySelector("#navHomeButton").className = classes;

		  // Add 'active' to menu button if not already there
		  classes = document.querySelector("#navMenuButton").className;
		  if (classes.indexOf("active") == -1) {
		    classes += " active";
		    document.querySelector("#navMenuButton").className = classes;
		  }		

	}


	function buildAndShowJSHTML(categories){
		$ajaxUtils.sendGetRequest(
			jsTitleHtml, function(jsTitleHtml){
				$ajaxUtils.sendGetRequest(jsHtml, function(jsHtml){
					var JSViewHtml = buildJSViewHtml(categories, jsTitleHtml, jsHtml);
	 	 			insertHtml("#HTTPDes", JSViewHtml);
				}, false);
		}, false);
	}
	function buildJSViewHtml(categories, jsTitleHtml, jsHtml){
		var finalHtml = jsTitleHtml;
		finalHtml += "<section class='row'>";

		for(var i =0; i<4; i++){
	
			var html = jsHtml;
			var name = ""+categories[i].name;
			var short_name = categories[i].short_name;
			html = insertProperty(html, "name", name);
			html = insertProperty(html, "short_name",  short_name);
			finalHtml += html;
		}
		finalHtml += "</section>";
  		return finalHtml;

	}


	// Remove the class 'active' from home and switch to Menu button
	var switchMenuToActive = function () {
	  // Remove 'active' from home button
	  var classes = document.querySelector("#navHomeButton").className;
	  classes = classes.replace(new RegExp("active", "g"), "");
	  document.querySelector("#navHomeButton").className = classes;

	  // Add 'active' to menu button if not already there
	  classes = document.querySelector("#navMenuButton").className;
	  if (classes.indexOf("active") == -1) {
	    classes += " active";
	    document.querySelector("#navMenuButton").className = classes;
	  }
	};

	global.$dc = dc;
})(window);