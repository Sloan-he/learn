var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var mock = require('mockjs');

var data = mock.mock({
	'list|1-10':[{
		'id|+1':1
	}]
});

var number = mock.mock({
	'list|1-10':[{
		'number|1-5.1-3':1
	}],
	'list2|1-10':[{
		'number2|3-9.5':3000
	}],
	'list3|1-10':[{
		'number3|5.2-5':0
	}],
	'list4|1-10':[{
		'number4|1.2':0
	}]
});

var booleans = mock.mock({
	'list|10':[{
		'boolean|2':false
	}]
});

var obj = mock.mock({
	'Object1|3':{
		'a':1,
		'b':2,
		'c':3 
	},
	'Object2|1-5':{
		'a':1,
		'b':2,
		'c':3 
	}
});

var arr = mock.mock({
	'array1|1':[{
		'a':1,
		'b':2,
		'c':3
	},{
		'd':4,
		'e':5,
		'f':6
	}],
	'array2|1-2':[{  
		'a':1,
		'b':2,
		'c':3
	},{
		'd':4,
		'e':5,
		'f':6 
	}]
});

var fun = mock.mock({
	'titles':'hello mockjs',

	'function':function(){
		return this.titles;
	}
});


var ret = JSON.stringify(fun);
router.get('/mockjs', function(req, res, next) {
  res.render('index', { title: ret });
});

module.exports = router;
console.log();