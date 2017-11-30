const mongoose = require('mongoose')

const VisitSchema = new mongoose.Schema({
  visitnum: Number,
	visitid: String,
	visitname: String,
	visit_time: {
		type: Date,
		default: Date.now
	}
})

const VisitModel = mongoose.model('visit', VisitSchema)

module.exports = VisitModel