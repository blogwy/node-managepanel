const user = require('../models/user')
const crypto = require('crypto');
const secret = 'wangyu';

exports.getcsedit = (req, res) => {
	const userid = req.query.userid;
  const name = req.query.name;
  const num = req.query.num;
  const email = req.query.email;
	const dep = req.query.dep;
	const _id = req.query.id;
	res.render('edit-cs', {
		userid,
    name,
    num,
    email,
		dep,
		_id,
		realname: req.session.realname
	})
}

exports.postcsedit = (req, res) => {
	const pwd = crypto.createHmac('sha256', secret)
	.update(req.body.pwd)
	.digest('hex');
	let data = {
		userid: req.body.userid,
		userpwd: pwd,
		realname: req.body.realname,
		department: req.body.dep,
		email: req.body.email,
		number: req.body.usernum,
		creat_time: Date.now()
	}
	user.update({_id:req.body._id},data).then(doc => {
		if(!doc){
			res.json({
				code: 1,
				msg: '修改失败'
			})
		}else{
			res.json({
				code: 0,
				msg: '修改成功'
			})
			
		}
	})
}