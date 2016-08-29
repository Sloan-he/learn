var http = require('http');
//导入模块
var express = require('express');
// 得到app模块
var app = express();
app.use(express.static(__dirname+'/public',{index:false}));

// 所有请求方式
// app.all('/',function(req,res,next){
// 	console.log('all');
// 	next();
// });
// get请求方式
app.get('/get',function(req,res){
	console.log('get');
});
// post方式
app.post('/',function(req,res){
	console.log('post');
});

// 字符串模式
// abcd abd
app.get('/abc?d',function(req,res){
	console.log('?模式');
	res.send('?模式');
});

// abcd abccd abcccd abccccd
app.get('/abc+d+',function(req,res){
	console.log('+模式');
	res.send('+模式');
});

//abcxyz abc1234xyz abcedawqefdtrfexyz
app.get('/abc*xyz',function(req,res){
	console.log('*模式');
	res.send('*模式');
});

//abc123 abc
app.get('/abc(123)?',function(req,res){
	console.log('???模式');
	res.send('???模式');
});

// 多函数
app.get('/fun',function(res,req,next){
	console.log('one');
	next();
},function(res,req){
	console.log('two');
});

app.get('/array',[one,two],function(res,req){
	console.log('three');
	req.send('hello world!');
	req.end();
});


function one(res,req,next){
	console.log('one');
	next();
}

function two(res,req,next){
	console.log('two');
	next();
}




// 创建服务端
http.createServer(app);


//鉴定3000端口
app.listen(3000);
