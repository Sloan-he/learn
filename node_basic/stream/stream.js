
var fs = require('fs');


var readStream = fs.createReadStream('a.txt');
var writeStream = fs.createWriteStream('b.txt');

// readStream.on('data',function(data){
// 	writeStream.write(data);
// });


// readStream.on('end',function(){
// 	writeStream.end();
// });

// readStream.pipe(writeStream);


readStream.on('data',function(data){
	if(writeStream.write(data) === false){
		readStream.pause();
	}
});

writeStream.on('drain',function(){
	readStream.resume();
});

readStream.on('end',function(){
	writeStream.end();
});