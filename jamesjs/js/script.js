function makeMulti(mul){
	function bb() {
		console.log("mul is "+mul);
	};
	bb();
	return (
		function(x) {
			return mul*x;
		}
	);
}

var doubleA = makeMulti(2);
console.log(doubleA(3));




var myObj = {
	name: "Yavin",
	course: "http",
	platform: "coursera",
	age: 41
};

for (var prop in myObj){
	console.log(prop +" : "+myObj[prop]);
}

var nNames = ["Yavin", "Caar", "Kaity"];
nNames.greeting = "Hello";

for(var yN in nNames){
	console.log(yN + " : "+nNames[yN]);
}


var names = ["jsss",{name: "kyle",
age:34},"coole"];

var newNames = ["john", "Mike", "Kara"];
newNames[100] = "Jim";
for(var i=0; i<newNames.length;i++){
	console.log("Hello "+newNames[i]);
}

var jss = new Array();

jss[0] = 0;
jss[1] = "Hey";
jss[2] = function(name) {
	console.log("The name is "+name);
};
jss[3] = {
	course: "Java SS",
	name: "Fashion"
};

console.log(jss);
jss[2](jss[1]);

var literalCircle = {
	radius : 10,
	getArea: function() {
		var self = this;
		var increaseRadius = function () {
			self.radius = 20;
		};
		console.log("The radius: "+this.radius);
		increaseRadius();
		console.log("The radius: "+this.radius);
		return Math.PI*Math.pow(this.radius,2);
	}
};

literalCircle.getArea();
console.log(literalCircle.getArea());

function Circle(radius){
	this.radius = radius;
}

Circle.prototype.getArea = function() {
	return Math.PI*Math.pow(this.radius, 2);
}

var myCircle = new Circle(10);
console.log(myCircle.getArea());
console.log(myCircle);


function test() {
	console.log(this);
	this.myJames = "James";
}

test();
console.log(window.myJames);

function orderChickenWith(sideDish){
	sideDish = sideDish || "whatever!";
	console.log("Chicken with "+sideDish);
}
orderChickenWith();

var company = new Object();
company.name = "Facebeek";

company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favoriteColor = "blue";

console.log(company);
console.log("Company CEO name is "+company.ceo.firstName);
console.log("company name is "+company["name"]);

company.$stock = 110;
company["stock of facebeek"] = 200;

var tiktik = {
	name: "tiktik",
	ceo: {
		firstName: "Nick",
		favColor: "green"
	},
	$stock: 150,
	"value of stock":300
};

console.log(tiktik);

function multiply(x,y) {
	return x*y;
}

console.log(multiply(5,3));
multiply.version = "v.1.1.1.0";
console.log(multiply);
console.log(multiply.toString());
console.log(multiply.version);

function makeMultiplier(multiply){
	var myFunc = function (x){
		return multiply*x;
	};
	return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));

var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

function doOperation(x, doOperation){
	return doOperation(x);
}

var result = doOperation(5, multiplyBy3);
console.log(result);

function changePrimitive(prim){
	console.log("In changePrimitive... ");
	console.log("prim : " + prim);
	prim = 5;
	console.log("After : "+prim);
}

var mVal = 7;
changePrimitive(mVal);
console.log("mVale : "+mVal);

function changeObject(prim){
	console.log("in ChangeObject..prim: "+prim.x);

}

mVal = {x:57};
changeObject(mVal);




