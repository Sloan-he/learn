
var net = require('net');


// 创建连接对象
var client = net.connect(8080,'127.0.0.1');


// 监听连接事件
client.on('connect',function(){
	console.log('connecting to server right now');
});

