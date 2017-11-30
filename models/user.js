const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
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
	},
	creat_time: {
		type: Date,
		default: Date.now
	}
})

const UserModel = mongoose.model('uus', UserSchema)

module.exports = UserModel