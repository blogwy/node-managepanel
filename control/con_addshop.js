const formidable = require('formidable')
const path = require('path')
const fs = require('fs')
const Product = require('../models/product')

exports.getAddShop = (req, res) => {
    res.render('add-shop',{
			realname: req.session.realname
		})
}

exports.postAddShop = (req, res) => {
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
				const i = 0;
				const data = {
					productid: fields.shopid,
					productname: fields.shopname,
					productstock: fields.shopstock,
					productprice: fields.shopprice,
					productimg: '/uploads/' + name,
					producttype: fields.shoptype,
					productsize: fields.shopsize
				}
				Product.create(data).then(doc => {
					if(doc){
						res.render('upload-res',{
							result: '添加成功',
							realname: req.session.realname
						})
					}else{
						res.render('upload-res',{
							result: '添加失败',
							realname: req.session.realname
						})
					}
				})
			}
		})
	})
}