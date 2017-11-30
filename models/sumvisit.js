const mongoose = require('mongoose')

const SumvisitSchema = new mongoose.Schema({
  Sumvisit: Number
})

const SumvisitModel = mongoose.model('sumvisit', SumvisitSchema)

module.exports = SumvisitModel