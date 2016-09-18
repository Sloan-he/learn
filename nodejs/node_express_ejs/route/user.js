
var express = require('express');
var route = express.Router();


route.get('/login',function(req,res){
	res.send('登录成功');
	res.end();
});


route.get('/loginout',function(req,res){
	res.send('登出成功');
	res.end();
});


module.exports = route;