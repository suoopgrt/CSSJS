

document.addEventListener("DOMContentLoaded", 
	function(event){

		function sayHello(){
		
			console.log(event);
			this.textContent = "Said it";
			var inputContents = document.getElementById("txt1").value;
			var message = "<h2>Hello "+inputContents+" ! </h2>";
			console.log(message);
			
			document.getElementById("content").innerHTML = message;

			if(inputContents === "student"){
				var title = document.querySelector("#title").textContent;
				title += " & lovin it!";
				document.querySelector("h1").textContent = title;
			}
		}

		function sayb2(){
			console.log(event);
			this.textContent = "Said it";
			document.querySelector("#content").textContent = "b2 pushed";

		}

		function sayb3(e) {
			console.log("Function sayb3");
			if(typeof e === 'object'){
				console.log("e clicked");
				switch(e.button){
					case 0: document.querySelector("#content").textContent = "Left button Clicked";
					case 2: document.querySelector("#content").textContent = "Right Button Clicked";
				}
			}
			console.log(event); 
		}

		function sayb4(e){
			console.log("Function sayb4");
			if(typeof e === 'object'){
				console.log("e clicked");
				switch(e.button){
					case 0: document.querySelector("#content").textContent = "Left button Clicked";
					case 2: document.querySelector("#content").textContent = "Right Button Clicked";
				}
			}
			console.log(event); 
		}			
//			document.querySelector("#content").textContent = "b3 pushed";
		

		document.getElementById("b1").onclick = sayHello;
		document.querySelector("#b2").addEventListener("click", sayb2);

		document.querySelector("#b3").onclick = sayb3;
		document.querySelector("#b4").addEventListener('mouseup', sayb4);

		document.querySelector("body").addEventListener("mousemove",
			function(event){
				if(event.shiftKey===true){
				console.log("x : "+event.clientX);
				console.log("y : "+event.clientY);
			}
			}
			);
	}

);