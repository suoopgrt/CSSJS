(function(global){
	var dc = {};
	var httpHtml = "snippets/http-snippet.html";
//  var allCategoriesUrl = "http://davids-restaurant.herokuapp.com/categories.json";
	var allCategoriesUrl = "data/categories.json"
//	var menuItemsUrl ="https://davids-restaurant.herokuapp.com/menu_items.json?category=";
	var canvasUrl = "data/canvas-items.json";


	var categoriesTitleHtml = "snippets/categories-title-snippet.html";
	var categoryHtml = "snippets/category-snippet.html";

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
			httpHtml, function(responseText){
				console.log("10 : "+responseText);
				document.querySelector("#HTTPDes").innerHTML = responseText;
			}, false);
	
	});
	dc.loadMenuCategories = function () {
		showLoading("#HTTPDes");
		$ajaxUtils.sendGetRequest(allCategoriesUrl, buildAndShowCategoriesHTML);
	};

	dc.loadCanvasItems = function(categoryShort){
		showLoading("#HTTPDes");
		$ajaxUtils.sendGetRequest(
				canvasUrl, buildAndShowCanvasItemsHTML
			);
	}

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
	// Using categories data and snippets html
	// build categories view HTML to be inserted into page
	function buildCategoriesViewHtml(categories,
	                                 categoriesTitleHtml,
	                                 categoryHtml) {

	  var finalHtml = categoriesTitleHtml;
	  finalHtml += "<section class='row'>";

	  // Loop over categories
	  for (var i = 0; i < categories.length; i++) {
	    // Insert category values
	    var html = categoryHtml;
	    var name = "" + categories[i].name;
	    var short_name = categories[i].short_name;
	    html =
	      insertProperty(html, "name", name);
	    html =
	      insertProperty(html,
	                     "short_name",
	                     short_name);
	    finalHtml += html;
	  }

	  finalHtml += "</section>";
	  return finalHtml;
	}

	function buildAndShowCategoriesHTML(categories){
		console.log("buildAndShowCategoriesHTML: "+categories);
		$ajaxUtils.sendGetRequest(
			categoriesTitleHtml, function(categoriesTitleHtml){
				$ajaxUtils.sendGetRequest( categoryHtml, function(categoryHtml){
					console.log("2 buildAndShowCategoriesHTML: "+categories);
					var categoriesViewHtml = buildCategoriesViewHtml(categories, categoriesTitleHtml, categoryHtml);
	 	 			insertHtml("#HTTPDes", categoriesViewHtml);
				}, false);
		}, false);
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

	function buildCategoriesViewHtml(categories, categoriesTitleHtml, categoryHtml){
		var finalHtml = categoriesTitleHtml;
		finalHtml += "<section class='row'>";
		console.log("category length : "+categories.length);

		for(var i =0; i<3; i++){
	
			var html = categoryHtml;
			var name = ""+categories[i].name;
			var short_name = categories[i].short_name;
			html = insertProperty(html, "name", name);
			html = insertProperty(html, "short_name",  short_name);
			finalHtml += html;
		}
		console.log("final html : "+finalHtml);
		finalHtml += "</section>";
  		return finalHtml;

	}

	global.$dc = dc;
})(window);