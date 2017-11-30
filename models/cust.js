const mongoose = require('mongoose')

const CustSchema = new mongoose.Schema({
	userid: String,
	userpwd: String,
	nickname: String,
	usersex: String,
	address: String,
	creat_time: {
		type: Date,
		default: Date.now
	}
})

const CustModel = mongoose.model('customer', CustSchema)

module.exports = CustModel