
const user = require('../models/user')

const showCsList = (req, res) => {
  var arr = [];
  user.find().then(doc => {
    if(doc){
      console.log(doc);
      res.render('cs-list',{
        realname: req.session.realname,
        data: doc
      })
    }else{
      res.render('cs-list',{
        realname: req.session.realname,
        data: arr
      })
    }
  })
  console.log(arr);
}

module.exports = showCsList