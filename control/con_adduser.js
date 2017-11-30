
const crypto = require('crypto');
const cust = require('../models/cust')
const secret = 'wangyu';


exports.getshowAddUser = (req, res) => {
    res.render('add-user',{
      realname: req.session.realname
    })
}

exports.postshowAddUser = (req, res) => {
  const pwd = crypto.createHmac('sha256', secret)
    .update(req.body.pwd)
    .digest('hex');
  const addre = req.body.province+'-'+req.body.city+'-'+req.body.zone+'-'+req.body.street
  const da = {
    userid: req.body.userid,
    userpwd: pwd,
    nickname: req.body.nickname,
    usersex: req.body.sex,
    address: addre,
    creat_time: Date.now()
  }
  console.log(req.body.email,pwd);
  cust.create(da, doc => {
    if(!doc){
      res.json({
        code: 0,
        msg: '添加用户成功'
      })
      console.log(doc);
    }else{
      res.json({
        code: 1,
        msg: '添加用户失败'
      })
      console.log(doc);
    }
  })
}