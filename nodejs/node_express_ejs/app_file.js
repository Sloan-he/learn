/*
 *	创建一个busboy对象,需要获取客户端heads的信息,把流链接到busboy
 *	监听file事件获取文件,读取数据,并且写入数据
 *	监听field事件来获取字段信息
 *	监听finish完成事件
 */ 

var http = require('http');
var express = require('express');
var busboy = require('busboy');
var fs = require('fs');
var app = express();


app.use(express.static(__dirname+'/public',{index:false}));


app.post('/fileupload',function(req,res){

	var busboyobj = new busboy({headers:req.headers});
	req.pipe(busboyobj);

	/*
	 *	传入参数
	 *	字段名 filedname
	 *	文件 file
	 *	文件名 filename
	 *	传输编码 encoding
	 *	mime类型 mimetype
	 */  
	busboyobj.on('file',function(filedname,file,filename,encoding,mimetype){

		// 在指定位置生成文件
		var writeStream = fs.createWriteStream('./uploads/'+filename);

		//读取数据
		file.on('data',function(data){
			console.log('File[' + filedname + '] not ' + data.length + 'bytes');
			//写入数据
			writeStream.write(data);
		});

		file.on('end',function(){
			console.log('File[' + filedname + '] Finished');
			//关系写入流
			writeStream.end();
		});
	});

	/*
	 *	字段名称 filedname
	 *	字段值 val	
	 *	字段名称是否被截断 fieldnameTruncated
	 *	值是否被截断 valTruncated
	 *	传输编码 encoding
	 *	mime类型 mimetype
	 */ 

	busboyobj.on('field',function(filedname,val,fieldnameTruncated,valTruncated){
		console.log('Field[' + filedname + ']: value=' + val + ',fieldnameTruncated=' + fieldnameTruncated + ',valTruncated=' + valTruncated);
	});

	busboyobj.on('finish',function(){
		console.log('form解析完成');
		res.writeHead(303,{Connection:'close',Location:'http://www.localhost:3000'});
		res.end();
	});
});


http.createServer(app).listen(3000);

