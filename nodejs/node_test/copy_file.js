'use strict';

var fs = require('fs');

var rs = fs.createReadStream('sample.txt','utf-8');
var ws = fs.createWriteStream('copied.txt');

rs.pipe(ws,{end:false});



rs.on('data',function(chunk){
	console.log('DATA:');
	console.log(chunk);
});


rs.on('data',function(chunk){
	console.log('DATA:2');
	console.log(chunk);
});