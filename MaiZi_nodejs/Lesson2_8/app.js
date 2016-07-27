var http = require('http');
var formidable = require('formidable');
var util = require('util');

// 创建上传
function enterRequest(request,response){
	response.writeHead(200,{'Content-Type':'text/html'});
	response.end(
		'<form action="/upload" enctype="multipart/form-data" method="post">' +
		'<input type="text" name="title" /><br/>' +
		'<input type="file" name="upload" multiple="multiple" /><br/>' +
		'<input type="submit" value="Upload Now" />' +
		'</form>'
	);
}

// 获取上传信息
function uploadRequest(request,response){
	var form = new formidable.IncomingForm();
	form.parse(request,function(err,fieids,files){
		response.writeHead(200,{'Content-Type':'text/plain'});
		response.write('reviced upload file');
		response.end(util.inspect(
			{
				fieids:fieids,
				files:files
			}
		));
	});
}

var Server = http.createServer(function(request,response){
	if(request.url == '/upload' && request.method.toLowerCase() == 'post'){
		console.log('upload  requet');
		uploadRequest(request,response);
		return;
	}

	enterRequest(request,response);
}).listen(8080);


