
var http = require('http');
var qs = require('querystring');

function onRequest(request,response){
	response.writeHead(200,{'Content-Type':'text/pain'});

	if(request.url == '/login' && request.method.toLowerCase() == 'post'){
		var postData = '';
		request.addListener('data',function(data){
			console.log('获取post参数中');
			postData += data;
		});
		request.addListener('end',function(){
			console.log('获取post参数结束');
			var content = qs.parse(postData).txt;
			response.write(content);
			console.log(postData);
			response.end();
		});
	}else{
		response.write('other method');
		response.end();
	}
}

var server = http.createServer(onRequest);

server.listen(8080);