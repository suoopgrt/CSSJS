function doLime(){

	var dd1 = document.getElementById("d1");
	dd1.style.backgroundColor = "lime";
}

function doYellow(){
	var dd1 = document.getElementById("d1");
	dd1.style.backgroundColor = "white";
	var ctx = dd1.getContext("2d");
	ctx.fillStyle="yellow"
	ctx.fillRect(10,20,100,100);
	ctx.fillStyle = "black";
	ctx.font = "30px Arial";
	ctx.fillText("Hello", 10, 30);
}

function doColor(){
	var dd1 = document.getElementById("d1");
	var colorinput = document.getElementById("clr");
	var color = colorinput.value;
	console.log(color);
	dd1.style.backgroundColor = color;
}

function doSquare(){
	var dd1 = document.getElementById("d1");
	var dsize = document.getElementById("sldr");
	var size = dsize.value;
	var ctx = dd1.getContext("2d");
	ctx.clearRect(0,0,dd1.width, dd1.height);
	ctx.fillStyle = "yellow";
	ctx.fillRect(10,10,size, size);
}

function upload(){
	console.log("file upload");
	var dd1 = document.getElementById("finput");
	var fname = dd1.value;
	alert("Chose "+fname);
}

function fupload(){
	console.log("file upload");
	var imgcanvas = document.getElementById("c1");
	var fileinput = document.getElementById("finput");
	var image = new SimpleImage(fileinput);
	console.log("fupload");
	image.drawTo(imgcanvas);
}