
const crypto = require('crypto');
const User = require('../models/user')
const secret = 'wangyu';

exports.getSignup = (req, res) => {
	res.render('signup')
}

exports.postSignup = (req, res) => {
  const userid = req.body.id;
  const realname = req.body.realname;
	// 加密
	const pwd = crypto.createHmac('sha256', secret)
		.update(req.body.pwd)
    .digest('hex');
    console.log(userid,realname,pwd);
    User.findOne({userid}).then(doc => {
      if(doc){
        res.json({code: 1, msg: '用户名已存在'})
      }else{
        User.create({
          userid,
          userpwd: pwd,
          realname,
        }).then(result => {
          if(result){
            // 设置/获取 session  都用的是 req.session
            req.session.realname = realname
            res.json({code: 0, msg: '恭喜您, 注册成功'})
            console.log(req.session.realname);
          }else{
            res.json({code: 2, msg: '很遗憾, 注册失败'})
          }
        })
      }
    })
}