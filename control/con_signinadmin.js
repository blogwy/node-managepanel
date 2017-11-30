
const crypto = require('crypto');
const admin = require('../models/admin')
const secret = 'wangyu';

exports.getSigninadmin = (req, res) => {
	res.render('signinadmin')
}

exports.postSigninadmin = (req, res) => {
  const userid = req.body.id;
	// 加密
	const pwd = crypto.createHmac('sha256', secret)
		.update(req.body.pwd)
    .digest('hex');
    admin.findOne({
      userid, 
      userpwd: pwd
    }).then(doc => {
      if(doc){
        // 设置/获取 session  都用的是 req.session
        req.session.realname = doc.realname
        console.log(req.session.realname);
        res.json({code: 0, msg: '登录成功'})
      }else{
        res.json({code: 1, msg: '用户名或密码错误'})
      }
    })
}