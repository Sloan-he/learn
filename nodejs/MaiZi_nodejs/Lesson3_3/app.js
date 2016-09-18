

var EventEmitter = require('events').EventEmitter;

var a = new EventEmitter();

a.on('myEvent',function(){
	console.log('event called');
});


process.nextTick(function(){
	a.emit('myEvent');
});


console.log('ooooooooooo');



var MyClass  =  require('./test');

var aa  = new MyClass;
aa.on('fsfdfs',function(){



});
