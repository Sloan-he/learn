var http = require('http');
var express = require('express');
var app = express();



app.get('/reset',function(req,res){
	req.app.locals.num = 0;
	res.locals.num = 0;
	res.write('set locals num 0 of app');
	res.write('set locals num 0 of res');
	res.end();
});

app.get('/add',function(req,res){
	req.app.locals.num += 1;
	res.locals.num += 1;
	res.write('res.app.locals.num=' + req.app.locals.num + ',res.locals.num=' + res.locals.num);
	res.end();
});


app.get('/headersSent',function(req,res){
	console.log(res.headersSent);
	res.send('ok');
	console.log(res.headersSent);
});



http.createServer(app).listen(3000);