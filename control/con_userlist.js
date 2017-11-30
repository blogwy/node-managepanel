
const cust = require('../models/cust')

const showUserlist = (req, res) => {
  var arr = [];
  var pageSize = 5;                   //一页多少条
  var currentPage = req.query.numpage;                //当前第几页
  var sort = {'creat_time':-1};        //排序（按登录时间倒序）
  var condition = {};                 //条件
  var skipnum = (currentPage - 1) * pageSize;   //跳过数
  cust.find().skip(skipnum).limit(pageSize).sort(sort).exec(function (err, doc) {
    if (err) {
      res.render('user-list',{
        realname: req.session.realname,
        data: arr
      })
    }
    else {
      cust.find().then(len => {
        var long = Math.ceil((len.length)/5)
        res.render('user-list',{
          realname: req.session.realname,
          data: doc,
          long
        })
      })
    }
  })
}

module.exports = showUserlist