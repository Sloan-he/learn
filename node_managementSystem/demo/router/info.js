
// 引用MySQL模块
var mysql = require('mysql');

// 获取数据函数
function getDataDB(queryCallback){

	// 链接数据库
	var connection = mysql.createConnection({
		host:'127.0.0.1',
		user:'root',
		password:'2575201314nn',
		port:3306,
		database:'mydb'
	});

	connection.connect();


	//查询数据,放入回调函数中
	var sql = 'select * from userinfos';
	connection.query(sql,function(err,result,fields){
		if(err){
			connection.close();
			return;
		}

		queryCallback(result);
	});
}






module.exports = function(req,res,next){

	getDataDB(function(result){
		res.render('info', {
			appName:'用户信息界面',
			sqldb:result
		});
	});
	
}

