
var net = require('net');


var server = net.createServer(function(conn){
	console.log('connection is conneciing...');
	conn.write('welcome to nodejs');
});

server.listen(8080,function(){
	console.log('Server is listening...');
});

