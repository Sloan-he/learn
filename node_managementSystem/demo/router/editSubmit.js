

var mysql = require('mysql');

function editSubmitDB(result,callback){
	var connection = mysql.createConnection({
		host:'127.0.0.1',
		user:'root',
		password:'2575201314nn',
		port:3306,
		database:'mydb'
	});

	connection.connect();


	var sql = 'update userinfos set email=?,age=?,nickname=?,realname=? where id =?';
	var params = [result.email,result.age,result.nickname,result.realname,result.id];
	connection.query(sql,params,function(err){
		if(err){
			callback(false);
			return;
		}

		callback(true);
	});
}











module.exports = function(req,res,next){
	editSubmitDB(req.query,function(status){
		if (status) {
			res.render('error',{
				tip:'修改成功'
			});
		}else{
			res.render('error',{
				tip:'修改失败'
			});
		}

		
	});
}