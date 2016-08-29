

var fs = require('fs');


// fs.mkdir('e:/learn/node_basic/fs/demo',function(e){

// 	if(e){
// 		console.log(e.message);
// 	}else{
// 		console.log('创建成功');
// 	}
// });


// fs.rmdir('e:/learn/node_basic/fs/demo',function(e){

// 	if(e){
// 		console.log(e.message);
// 	}else{
// 		console.log('删除成功');
// 	}
// });


// fs.exists('e:/learn',function(bool){
// 	console.log(bool);
// });



// fs.readFile('E:/learn/node_basic/fs/a.txt',{encoding:'utf8',flag:'r'},function(err,data){
// 	if(err){
// 		console.log(err);
// 		return;
// 	}

// 	console.log(data);
// });


// var data = fs.readFileSync('E:/learn/node_basic/fs/a.txt');
// console.log('sync:' + data);

// fs.writeFile('E:/learn/node_basic/fs/c.txt','hello Node.js',{encoding:'utf8',flag:'w'},function(err){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log('成功');
// 	}
// });



// fs.appendFile('E:/learn/node_basic/fs/c.txt',' hello world',{encoding:'utf8'},function(err){
// 	if (err) {
// 		console.log(err);
// 	}else{
// 		console.log('追加成功');
// 	}
// });


var readPath = 'E:/learn/node_basic/fs/';
var readname = 'a.txt';
var writePath = 'E:/learn/node_basic/fs/copy/';
var writename = 'copy.txt';


fs.exists(readPath+readname,function(bool){

	if(!bool){
		console.log('源文件不存在');
		return;
	}

	if(!fs.existsSync(writePath)){
		fs.mkdir(writePath);
	}

	fs.readFile(readPath+readname,function(err,data){
		
		fs.writeFile(writePath+writename,data,function(){
			if(err){
				console.log('文件拷贝失败');
			}else{
				console.log('文件拷贝成功');
			}
		});
	});
});
