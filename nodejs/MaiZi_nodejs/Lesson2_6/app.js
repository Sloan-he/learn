

/*console.log('循环开始');

var i = 10;
while( i > 0 ){
	i --;
	console.log(i);
}

console.log('循环结束');*/


console.log('循环开始');

setTimeout(function(){
	var i = 10;
	while( i > 0 ){
		i --;
		console.log(i);
	}
},0);

console.log('循环结束');