var express = require('express');
var router = express.Router();

// 设置路由
router.get('/',function(req,res){
	res.render('index', {
		title:'用户管理系统'
	});
});



module.exports = router;

// module.exports = function(req,res,next){
// 	res.render('index', {
// 		title:'用户管理系统'
// 	});
// }