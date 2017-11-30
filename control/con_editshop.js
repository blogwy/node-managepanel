const Product = require('../models/product')
const formidable = require('formidable')
const path = require('path')
const fs = require('fs')


exports.getShopedit = (req, res) => {
	const name = req.query.name;
  const type = req.query.type;
  const img = req.query.img;
  const stock = req.query.stock;
  const price = req.query.price;
  const size = req.query.size;
  const time = req.query.time;
	res.render('edit-shop', {
		name,
    type,
    img,
    stock,
    price,
    size,
		time,
		realname: req.session.realname
	})
}

exports.postShopedit = (req, res) => {
  const form = new formidable.IncomingForm();
	form.uploadDir = path.join(__dirname, '../uploads');
	form.parse(req, (err, fields, files) => {
		const oldPath = files.shopimg.path
		const name = 'shop_' + Date.now() + files.shopimg.name
		const newPath = path.join(__dirname, '../uploads', name)
		fs.rename(oldPath, newPath, err => {
			if(err){
				res.send('上传失败')
			}else{
				const data = {
					productid: String,
					productname: fields.shopname,
					productstock: fields.shopstock,
					productprice: fields.shopprice,
					productimg: '/uploads/' + name,
					producttype: fields.shoptype,
					productsize: fields.shopsize,
					creat_time: Date.now()
        }
        Product.update({productname:fields.shopname},data).then(doc => {
          if(doc){
            res.render('upload-res',{
							result: '修改成功',
							realname: req.session.realname
						})
          }else{
            res.render('upload-res',{
							result: '修改失败',
							realname: req.session.realname
						})
          }
        })
			}
		})
	})
}