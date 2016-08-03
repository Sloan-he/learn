
var mysql = require('mysql');


function validataUser(uname,upwd,callback){

	var connection = mysql.createConnection({
		host:'127.0.0.1',
		user:'root',
		password:'2575201314nn',
		port:3306,
		database:'mydb'
	});

	connection.connect();

	var sql = 'select * from userinfos where loginname=? and passwd=?';
	var parmes = [uname,upwd];
	connection.query(sql,parmes,function(err,result){
		console.log(result.length);
		var loginStatus = result.length == 1 ? true : false;
		callback(loginStatus);
	});
}



module.exports = function(req,res,next){
	var uname = req.query.username;
	var upwd = req.query.password;
	validataUser(uname,upwd,function(loginStatus){
		console.log(loginStatus);
		if(loginStatus){
			res.redirect('/info');
			return;
		}
		res.redirect('/error');
	});
	
}