var http = require('http');
var url = require('url');
var qs = require('querystring');

function onRequest(req,resp){

	// 使用qs模块获取url参数
	var arg = url.parse(req.url).query;
	var nameValue = qs.parse(arg)['name'];
	resp.writeHead(200);
	resp.write('name:' + nameValue);
	resp.write('\n');

	// 使用url模块来获取url参数
	var arg2 = url.parse(req.url,true).query;
	resp.write('age:' + arg2.age);
	resp.write('\n');
	resp.end();
}


http.createServer(onRequest).listen(8080);