
var http = require('http');
//导入模块
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var localCount = require('./route/local_count.js'); 
// 得到app模块
var app = express();

app.use(express.static(__dirname+'/public',{index:false}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser('secret'));


// request属性
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


// 设置cookie解析
app.get('/signed',function(req,res){
	console.log(req.signedCookies);
	res.cookie('pwd','1234',{signed:true});
	res.end();
});


app.locals.num = 0;
app.get('/app',localCount);


// param方法获取参数
app.route('/')
	.get(function(req,res,next){
		console.log('get::' + req.param('username'));
		next();
	})
	.post(function(req,res,next){
		console.log('post:' + req.param('username'));
		next();
	})
	.all(function(req,res){
		console.log('all:' + req.param('username'));
		res.send('ok');
		res.end();
	});


// request .get方法和is方法
app.get('/get',function(req,res){
	console.log(req.get('accept'));
	console.log(req.is('text/html'));
	res.send('ok');
	res.end();
});




// 创建服务端
http.createServer(app);


//鉴定3000端口
app.listen(3000);