

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
	var sqlDataName = 'select * form userinfos where loginname=' + uname;
	connection.query(sqlDataName,function(err,result){
		if(result.length == 1){
			callback(false);
			return;
		}
	});


	var sql = 'insert into userinfos (loginname,passwd) values (?,?)';
	var params = [uname,upwd];

	connection.query(sql,params,function(err){
		err ? callback(false) : callback(true);
	});
}


module.exports = function(req,res,next){
	var uname = req.query.username;
	var upwd = req.query.password;
	register(uname,upwd,function(status){
		if(status){
			res.render('index',{
				title:'用户管理系统'
			});
		}else{
			res.render('error');
		}
	});

}