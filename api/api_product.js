const express = require('express')
const product = require('../models/product.js')
const Router = express.Router()

Router.get('/product', function (req, res) {
  product.find({
    producttype: req.query.type
  },function (err,doc) {
    if(!err){
      if (req.query.shopid || req.query.id){
        let datas = doc.filter(function (item,index) {
          return (item.productid == req.query.shopid || item._id == req.query.id);
        })
        res.json({
          code: 200,
          result: datas
        })
      }
      if (!req.query.shopid && !req.query.id){
        res.json({
          code: 200,
          result: doc
        })
      }
    }else{
      res.json({
        code: 404,
        result: 'failed'
      })
    }
  })
})


module.exports = Router