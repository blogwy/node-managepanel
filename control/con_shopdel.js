const product = require('../models/product')

const shopDel = (req, res) => {
	const _id = req.query.id
	product.findByIdAndRemove(_id).then(doc => {
		if(doc) {
			res.redirect('/admin/shop-list')
		}
	})
}

module.exports = shopDel