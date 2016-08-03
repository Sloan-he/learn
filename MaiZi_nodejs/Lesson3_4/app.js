
var fs = require('fs');


fs.readFile('a.txt','utf-8',function(err,data){
	if(err){
		console.log(err);
	}else{
		console.log('no Sync ' + data);
	}
});


console.log('loading......');

console.log('-------------------');


var rlt = fs.readFileSync('a.txt','utf-8');

console.log(rlt);
console.log('Sync loading.....');

