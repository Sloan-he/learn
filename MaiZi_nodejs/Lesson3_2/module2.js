function Hello(){

	var name;
	console.log(this);
	this.setName = function(theName){
		name = theName
	};

	this.sayHello = function(){
		console.log(name);
	};
}


module.exports = Hello;