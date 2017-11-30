const cust = require('../models/cust')

const shopDel = (req, res) => {
	const _id = req.query.id
	cust.findByIdAndRemove(_id).then(doc => {
		if(doc) {
			res.redirect('/admin/user-list')
		}
	})
}

module.exports = shopDel