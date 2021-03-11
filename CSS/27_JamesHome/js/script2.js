(function (ww) {
var johnGreeter = {};
johnGreeter.name = "John";
johnGreeter.sayHi = function() {
	console.log("Hi "+johnGreeter.name);
}
ww.johnGreeter = johnGreeter;

})(window);


