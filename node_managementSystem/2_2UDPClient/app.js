
var dgram = require('dgram');


var serverSocket = dgram.createSocket('udp4');

serverSocket.bind(function(){
	serverSocket.setBroadcast(true);
});

var message = Buffer('hello hesy');

serverSocket.send(message,0,message.length,8080,'127.0.0.1',function(){
	serverSocket.close();
});