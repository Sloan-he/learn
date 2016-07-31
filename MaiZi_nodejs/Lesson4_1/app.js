
var http = require('http');
var mysql = require('mysql');


var connection = mysql.createConnection({
	user:'root',
	password:'2575201314nn',
	database:'mydb'
});


http.createServer(function(request,response) {
	
	
	connection.query('select * from test',function(err,rows,fileds){
		response.writeHead(200,{'Content-Type':'text/plain'});
		console.log(rows);
		response.end(JSON.stringify(rows));
	});
}).listen(8080);
