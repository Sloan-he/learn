
var http = require('http');


http.createServer(function(req,res){

	if(req.method.toUpperCase = 'POST'){
		var postData = '';
		req.on('data',function(data){
			postData += data;
		});

		req.on('end',function(){
			console.log(postData);
		});
	}else if(req.method.toUpperCase = 'GET'){
		console.log('暂不处理');
	}else{
		console.log('其他请求');
	}

	res.writeHead(200,{'Content-Type':'text/plain'});
	res.write('server:hello client');
	res.end();

}).listen(3000,function(){

	console.log('Server is run');

});