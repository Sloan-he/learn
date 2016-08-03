

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
	var sqlDataName = 'select * from userinfos where loginname=' + uname;
	var isStatus = false;
	connection.query(sqlDataName,function(err,result){
		if(result == '' || result == 'underfined' || result == null){
			isStatus = true;
			return;
		}
	});


	if(isStatus){
		callback(false);
		return;
	}


	var sql = 'insert into userinfos (loginname,passwd) values (?,?)';
	var params = [uname,upwd];
	connection.query(sql,params,function(err){
		console.log('-------------ok---------');
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
			res.render('error',{
				tip:'账号已存在'
			});
		}
	});

}