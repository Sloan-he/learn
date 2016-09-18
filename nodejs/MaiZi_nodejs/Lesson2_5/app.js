var http = require('http');

//初始化路由
var handlePaths = [];


//添加路由地址
function initPaths(){

	handlePaths.push('/');
	handlePaths.push('/login');
	handlePaths.push('/register');

}

//判断路由地址
function rotuteHandle(path){

	for(var i in handlePaths){
		console.log(handlePaths[i],path);
		if(handlePaths[i] == path){
			console.log(handlePaths[i]);
			return handlePaths[i];
		}
	}
	return '404 Not Fount';
}



function onRequest(request,response){

	response.writeHead(200,{'Content-Type':'text/plain'});
	var requestPath = request.url;
	var responseContent = rotuteHandle(requestPath);
	response.write('rotute is:' + responseContent);
	response.end();

}

initPaths();

var server = http.createServer(onRequest);
server.listen(8080);