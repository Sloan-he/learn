
module.exports = function(req,res,next){
	res.render('error',{
		tip:'账号密码错误'
	});
}