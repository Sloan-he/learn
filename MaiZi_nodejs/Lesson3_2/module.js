var name;

exports.setName = function(thename){
	name = thename;
}

exports.sayHello = function(){
	console.log('hello, ' + name);
}