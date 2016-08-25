
var url = require('url');
var qs = require('querystring');

var urld = 'http://localhost:3000/index.html?name=hesy&pwd=123456';

var paurl = url.parse(urld,true);


// console.log(paurl.query.name);


var str = url.format({
	protocol:'http',
	host:'localhost:8080',
	port:8080,
	query:'name=xiaoming',
	pathname:'/demo/index.html'
});


// console.log(str);



var qsString = qs.stringify({name:'xiaoming',age:18,gender:'man'});

console.log(qsString);

var qsobj = qs.parse(qsString);

console.log(qsobj);