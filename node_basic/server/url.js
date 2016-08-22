
var url = require('url');

var urld = 'http://localhost.com/index.html?name=hesy&pwd=123456';

var paurl = url.parse(urld);


console.log(paurl);