
var mysql = require('mysql');

function editUserDB(uid,callback){

	var connection = mysql.createConnection({
		host:'127.0.0.1',
		user:'root',
		password:'2575201314nn',
		port:3306,
		database:'mydb'
	})

	connection.connect();

	var sql = 'select * from userinfos where id =?';
	connection.query(sql,uid,function(err,result,fields){
		if(err){
			connection.close();
			return;
		}

		callback(result);
	});
}




module.exports = function(req,res,next){

	editUserDB(req.query.userid,function(result){
		res.render('edit',{
			sqldb:result,
			appName:'修改资料'
			
		});
	});
}