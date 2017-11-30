const product = require('../models/product')

const showShopList = (req, res) => {
  var arr = [];
  product.find().then(doc => {
    if(doc){
      console.log(doc);
      res.render('shop-list',{
        realname: req.session.realname,
        data: doc
      })
    }else{
      res.render('shop-list',{
        realname: req.session.realname,
        data: arr
      })
    }
  })
  console.log(arr);
}

module.exports = showShopList