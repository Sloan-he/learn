var http = require('http');

var data = 'client:hello Server';

var options = {
	host:'127.0.0.1',
	port:3000,
	method:'post',
	headers:{
		'Content-Type':'application/x-www-form-unlencoded',
		'Content-Length':data.length
	}
}

var requestCallback = function(im){
	var serverData = '';
	im.on('data',function(data){
		serverData += data;
	});

	im.on('end',function(){
		console.log(serverData);
	})
}

var req = http.request(options,requestCallback);



req.on('error',function(e){
	console.log(e.message);
});


req.write(data);
req.end();