document.addEventListener("DOMContentLoaded", 
	function(event){
		document.querySelector("button").addEventListener("click", function(){
			console.log(" button : "+this);

			// Call server to get the name 
			$ajaxUtils.sendGetRequest("/data/names.json", function(rrr){
				console.log(rrr);
				var message = rrr.firstName +" " +rrr.lastName;
				console.log(message);
				if(rrr.likesChineseFood){
					message += " likes Chinese food";
				}else{
					message += " doesn't like Chinese food"
				}
				message += "and uses ";
				message += rrr.numberOfDisplays;
				message +=" displays for coding.";

				document.querySelector("#content").innerHTML = "<h2>"+message+"</h2>";
				//document.querySelector("#content").innerHTML = "you";
			});

			
		});
	}



	);


