const user = require('../models/user')

const csDel = (req, res) => {
	const _id = req.query.id
	user.findByIdAndRemove(_id).then(doc => {
		if(doc) {
			res.redirect('/admin/cs-list')
		}
	})
}

module.exports = csDel