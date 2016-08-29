'use strict'

var s = 'Hello';

// function greet(name){
// 	console.log(s + ', ' + name + '!');
// }

// function hi(name){
// 	console.log('hi, ' + name + '!');
// }

// function goodBye(name){
// 	console.log('GoodBye, ' + name + '!');
// }


// module.exports = {
// 	greet:greet,
// 	hi:hi,
// 	goodBye:goodBye
// }


// ------------------------------

// function hello(){

// 	this.log1 = function(){
// 		console.log('hello');
// 	},
// 	this.log2 = [1,2,3,4,5];
// 	this.log3 = function(){
// 		this.log1();
// 	}
// }

// module.exports = hello;


// -----------------------------

module.exports.add = function(a,b){
	console.log(a+b);
}


module.exports.cut = function(c,d){
	exports.add(c,d);
}