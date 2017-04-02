// function add (a,b) {
// 	return a + b;
// }

// console.log(add(5,5));


// var toAdd = [5,5,5];

// console.log(add(...toAdd));



// Challenge 1


var person = ["Ty", 28];
var personTwo = ["Keira", 22];

function greeter (name,age) {
	console.log(`Hi ${name}, you are ${age}`);
}

greeter(...person);
greeter(...personTwo);




// Challenge 2

var names = ["Bulbasaur","Charmander"];
var final = ["Squirtle",...names];


// Hi name / use for each


final.forEach(function (e) {
	console.log(`Hi ${e}`);
});