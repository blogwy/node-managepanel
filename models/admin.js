const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
	userid: String,
	userpwd: String,
	realname: String,
	department: {
		type: String,
		default: '请添加部门'
	},
	email: {
		type: String,
		default: '请添加邮箱'
	},
	number: {
		type: String,
		default: '请添加编号'
	}
})

const adminModel = mongoose.model('admin', adminSchema)

module.exports = adminModel