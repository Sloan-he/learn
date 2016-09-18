

var mysql = require('mysql');

function register(uname,upwd,callback){
	var connection = mysql.createConnection({
		host:'127.0.0.1',
		user:'root',
		password:'2575201314nn',
		port:3306,
		database:'mydb'
	});


	connection.connect();
	var sqlDataName = 'select * from userinfos where loginname=?';
	var isparams = uname;
	connection.query(sqlDataName,isparams,function(err,result){
		if(result.length){
			callback(false,'账号已存在');
		}else{
			var sql = 'insert into userinfos (loginname,passwd) values (?,?)';
			var params = [uname,upwd];
			connection.query(sql,params,function(err){
				err ? callback(false,'注册失败') : callback(true);
			});
		}
	});


}
	


module.exports = function(req,res,next){
	var uname = req.query.username;
	var upwd = req.query.password;
	register(uname,upwd,function(status,yu){
		if(status){
			res.render('index',{
				title:'用户管理系统'
			});
		}else{
			res.render('error',{
				tip:yu
			});
		}
	});

}