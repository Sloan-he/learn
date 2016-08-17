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

function hello(){

	this.log1 = function(){
		console.log('hello');
	},
	this.log2 = [1,2,3,4,5];
	this.log3 = function(){
		this.log1();
	}
}

module.exports = hello;

// module.exports = {
// 	greet:greet,
// 	hi:hi,
// 	goodBye:goodBye
// }