var http = require('http');


function onRequest(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	var requestPath = request.url;
	response.end();
}


var server = http.createServer(onRequest);
server.listen(8080);