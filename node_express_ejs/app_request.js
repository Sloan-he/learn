
var http = require('http');
//导入模块
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var localCount = require('./route/local_count.js'); 
// 得到app模块
var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser('secret'));



app.route('/simple')
	.get(function(req,res,next){
		console.log('hostname=' + req.hostname);
		console.log('ip=' + req.ip);
		console.log('path=' + req.path);
		console.log('protocol=' + req.protocol);
		console.log(req.query);
		console.log(req.route);
		console.log(req.cookies);
		next();
	})
	.post(function(req,res,next){
		console.log(req.body);
		next();
	})
	.all(function(req,res){
		res.cookie('name','hesy');
		res.send('ok');
		res.end();
	});


app.get('/signed',function(req,res){
	console.log(req.signedCookies);
	res.cookie('pwd','1234',{signed:true});
	res.end();
});


app.locals.num = 0;
app.get('/app',localCount);




// 创建服务端
http.createServer(app);


//鉴定3000端口
app.listen(3000);