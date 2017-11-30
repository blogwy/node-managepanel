
const crypto = require('crypto');
const user = require('../models/user')
const secret = 'wangyu';

exports.getshowAddCs = (req, res) => {
  res.render('add-cs',{
    realname: req.session.realname
  })
}

exports.postshowAddCs = (req, res) => {
  const pwd = crypto.createHmac('sha256', secret)
    .update(req.body.pwd)
    .digest('hex');
  const da = {
    userid: req.body.id,
    userpwd: pwd,
    realname: req.body.realnanme,
    department: req.body.dep,
    email: req.body.email,
    number: req.body.num,
    creat_time: Date.now()
  }
  console.log(req.body.email,pwd);
  user.create(da, doc => {
    if(doc){
      res.render('upload-res',{
        result: '添加客服成功',
        realname: req.session.realname
      })
      console.log(doc);
    }else{
      res.render('upload-res',{
        result: '添加客服失败',
        realname: req.session.realname
      })
      console.log(doc);
    }
  })
}