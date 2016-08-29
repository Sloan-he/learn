
module.exports = function(req,res){
	console.log(req.app.locals.num);
	req.app.locals.num += 1;
	res.send(req.app.locals.num + '');
	res.end();
}