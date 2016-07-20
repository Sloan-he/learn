'use strict';

var
	fs = require('fs'),
	url = require('url'),
	path = require('path'),
	http = require('http');


//从命令行参数获取root目录,默认是当前目录
var root = path.resolve(process.argv[2] || '.');

console.log('Static root dir:' + root);

//创建服务器

var server = http.createServer(function(request,reponse){

	//获得url的path.类似'/css/bootstrap.css'
	var pathname = url.parse(request.url).pathname;

	//获取对应的本地文件路径,类似'/srv/www/css/bootstrap.css'
	var filepath = path.join(root,pathname);

	//获取文件状态
	fs.stat(filepath,function(err,stats){
		if(!err && stats.isFile()){

			// 没有出错并且文件存在
			console.log('200' + request.url);
			// 发送200状态
			reponse.writeHead(200);

			//将文件流导向response
			fs.creatReadStream(filepath).pipe(reponse);
		}else{

			// 出错了或者文件不存在
			console.log('404' + reponest.url);
			response.end('404 Not Fount');
		}
	});
});