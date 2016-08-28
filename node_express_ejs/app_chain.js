var http = require('http');
//导入模块
var express = require('express');
var bodyParser = require('body-parser');
var user = require('./route/user.js');
// 得到app模块
var app = express();

app.use('/user',user);

app.use(express.static(__dirname+'/public',{index:false}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.route('/')
	.get(function(req,res,next){
		req.user = req.query;
		next();
	})
	.post(function(req,res,next){
		req.user = req.body;
		next();
	})
	.all(function(req,res){
		res.send(req.user);
		res.end();
	});








// 创建服务端
http.createServer(app);


//鉴定3000端口
app.listen(3000);