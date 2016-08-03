
var dgram = require('dgram');

var serverSocket = dgram.createSocket('udp4');


// 监听错误信息
serverSocket.on('error',function(err){
	console.log('server error:' + err);
});

// 监听客户端发送过来的消息
serverSocket.on('message',function(msg,info){
	console.log('server got ' + msg + 'form ' + info.address + ':' + info.port);
});


// 监听消息
serverSocket.on('listening',function(){
	console.log('server is listening');
});


// 绑定端口

serverSocket.bind(8080);