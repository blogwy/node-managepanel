
const crypto = require('crypto');
const User = require('../models/user')
const secret = 'wangyu';

exports.getSignin = (req, res) => {
  res.render('signin')
  console.log(req.session.validat_num);
}

exports.postSignin = (req, res) => {
  const userid = req.body.id;
	// 加密
	const pwd = crypto.createHmac('sha256', secret)
		.update(req.body.pwd)
    .digest('hex');
    User.findOne({
      userid, 
      userpwd: pwd
    }).then(doc => {
      if(doc){
        // 设置/获取 session  都用的是 req.session
        if(req.body.validat == req.session.validat_num){
          req.session.realname = doc.realname
          console.log(req.session.realname);
          res.json({code: 0, msg: '登录成功'})
        }else{
          res.json({code: 1, msg: '验证码错误'})
        }
      }else{
        res.json({code: 1, msg: '用户名或密码错误'})
      }
    })
}