
var mysql = require('mysql');

function deletUserDB(useId,callback) {
	var connection = mysql.createConnection({
		host:'127.0.0.1',
		user:'root',
		password:'2575201314nn',
		port:3306,
		database:'mydb'
	});

	connection.connect();

	var sql = 'delete from userinfos where id = ' + useId;
	connection.query(sql,function(err,result,fileds){
		if(err){
			connection.close();
			return;
		}

		callback();
	});
}



module.exports = function(req,res,next){
	var delid = req.query.useid;
	
	deletUserDB(delid,function(){
		res.render('deletUser',{
			appName:'删除成功'
		});
	});
}