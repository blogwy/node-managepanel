const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
	productid: String,
	productname: String,
	productstock: String,
	productprice: String,
	productimg: String,
	producttype: String,
	productsize: String,
	creat_time: {
		type: Date,
		default: Date.now
	}
})

const ProductModel = mongoose.model('product', ProductSchema)

module.exports = ProductModel