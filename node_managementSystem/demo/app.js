// 引入需要使用的模块
var express = require('express');
var ejs = require('ejs');


// 配置路由地址
var routes = require('./router/index');
var info = require('./router/info');
var deletUser = require('./router/deletUser');
var login = require('./router/login');
var reg = require('./router/reg');
var register = require('./router/register');
var error = require('./router/error');


var app = express();

// 设置渲染HTML模板
app.set('views','./views');
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');




// use路由地址
app.use('/', routes);
app.use('/info', info);
app.use('/deletUser', deletUser);
app.use('/login', login);
app.use('/error', error);
app.use('/reg',reg);
app.use('/register',register);


// 监听服务，端口：8080
var server = app.listen(8080,function(){
	console.log('Server is running...');
});

module.exports = app;
