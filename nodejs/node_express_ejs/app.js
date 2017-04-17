var http = require('http');
var express = require('express');
var multer = require('multer')
var fs = require('fs');
var app = express();

app.use('/',express.static(__dirname+'/public'));
app.use(multer({ dest: 'uploads/' }).array('uploadFile'))

app.post('/fileupload',function(req,res,next){

	var des_file = __dirname + '/upload/' + req.files[0].originalname
	fs.readFile(req.files[0].path, function (readErr, data) {
	  if(readErr){
	    res.end('读取文件失败',readErr)
	  }else{
	    fs.writeFile(des_file, data, function (err) {
	      if( err ){
	        console.log('写入文件失败',error)
	      }else{
	        var response = {
	          message:'File uploaded successfully',
	          filename:req.files[0].originalname
	        }
	        console.log(response)
	        res.end(JSON.stringify(response))
	      }
	    })
	  }
	})
})



var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});