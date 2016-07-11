'use strict'

var s = 'Hello';

function greet(name){
	console.log(s + ', ' + name + '!');
}

function hi(name){
	console.log('hi, ' + name + '!');
}

function goodBye(name){
	console.log('GoodBye, ' + name + '!');
}

module.exports = {
	greet:greet,
	hi:hi,
	goodBye:goodBye
}