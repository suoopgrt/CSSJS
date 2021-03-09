jamesGreeter.sayHello();
johnGreeter.sayHi();

function a() {
	console.log("a Sample");
}

var b = function () {
	console.log("b Sample");
}

var c = ( function() {
	console.log("c Sample");
});

(function(name){console.log("d Sample :"+name);})("John");

a();
b();
c();