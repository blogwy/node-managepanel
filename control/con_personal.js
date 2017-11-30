
const user = require('../models/user');


exports.getshowPersonal = (req, res) => {
  var realname = req.session.realname;
  user.find({realname}).then(doc => {
    if(doc){
      res.render('personal-info',{
        realname: req.session.realname,
        data: doc[0]
      })
      console.log(doc[0].realname);
    }else{
      res.render('personal-info',{
        realname: req.session.realname,
        data: []
      })
    }
  })
}

exports.postshowPersonal = (req, res) => {
  var realname = req.session.realname;
  var da = {
    userid: req.body.userid,
    realname: req.body.realname,
    number: req.body.usernum,
    email: req.body.email,
    department: req.body.dep,
  }
  user.update({realname},da).then(doc => {
    if(doc){
      res.json({code: 0, msg: '个人信息修改成功'})
    }else{
      res.json({code: 1, msg: '个人信息修改失败'})
    }
  })
}