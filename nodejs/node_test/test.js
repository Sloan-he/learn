//process.nextTick()将在下一轮事件循环中使用
process.nextTick(function(){
	console.log('nextTick callBack!');
});

console.log('nextTick was set!');


// 程序即将退出时的回调函数:
process.on('exit',function(code){
	console.log('about to exit with code:' + code);
});


//判断JavaScript执行环境
if (typeof(window) === 'underfind'){
	console.log('node.js');
}else{
	console.log('browser');
}

//查看程序文件
console.log('current js file:' + __filename);
//查看程序目录
console.log('current js dir:' + __dirname);
// process.argv 存储了命令行参数
console.log('arguments:' + JSON.stringify(process.argv));
// 当前目录
console.log('cwd:' + process.cwd());