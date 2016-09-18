
var http = require('http');
//导入模块
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var qs = require('qs');
// 得到app模块
var app = express();

// 自定义中间件
app.use(function(req,res,next){
	console.log('进入自定义中间件');
	next();
});

// 日志中间件
app.use(morgan('combined'));
// 处理post提交中间件
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());




//挂载访问静态资源中间件
app.use('/',express.static(__dirname+'/public',{index:false}));


// 处理用户请求（路由）
app.all('/',function(req,res){
	console.log('hello server');
	console.log(req.body);
	console.log(qs.parse(req.query));
	res.send('hello world');
	res.end();
});




// 创建服务端
http.createServer(app);


//鉴定3000端口
app.listen(3000);













// var server = http.createServer(function(req,res){
// 	console.log('server is running');
// });

// server.listen(3000);