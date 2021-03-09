
(function(wee) {
	var jamesGreeter = {};
	jamesGreeter.name = "James";
	jamesGreeter.sayHello = function () {
	console.log("Hello "+jamesGreeter.name);
	}
	wee.jamesGreeter = jamesGreeter;
})(window);