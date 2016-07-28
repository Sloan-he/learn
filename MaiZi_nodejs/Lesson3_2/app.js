
var module = require('./module');
module.setName('hesy');



var md2 = require('./module');
md2.setName('heshy');


module.sayHello();


var hellomd2 = require('./module2');

var hello = new hellomd2();


hello.setName('ok');
hello.sayHello();
