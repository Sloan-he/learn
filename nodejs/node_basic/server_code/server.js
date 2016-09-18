

var http = require('http');
var url = require('url');
var qs = require('querystring');
var fs = require('fs');

http.createServer(function(req,res){
	
	if(validateExName(req)){

		parseParam(req);
		readStaticFile(req,res);

	}else{
		res.writeHead(404,{"Content-type":'text/plain'});
		res.write('请求路径错误');
		res.end();
	}

}).listen(3000,function(err){
	if(!err){
		console.log('Server is running');
	}
});


// 请求验证文件后缀名
function validateExName(req){
	var pathName = url.parse(req.url).pathname;
	var exName = pathName.substring(pathName.indexOf('.'));
	return '.html.jpg.png.gif.css.js.'.indexOf(exName) >= 0;
}


// 获取参数
function parseParam(req){

	if(req.method.toUpperCase() == 'POST'){
		var paramData = '';

		req.on('data',function(data){
			paramData += data;
		});

		req.on('end',function(){
			req.param = qs.parse(paramData);
		});

	}

	if(req.method.toUpperCase() == 'GET'){
		req.param = url.parse(req.url,true).query;
	}

	return req.param;
	 // console.log(req.param);

}


function readStaticFile(req,res){

	var pathName = url.parse(req.url).pathname;
	if(fs.existsSync(__dirname + pathName)){
		fs.createReadStream('.'+pathName).pipe(res);
	}else{
		res.writeHead(404,{"Content-type":'text/plain'});
		res.write('请求资源不存在');
	}

	
}