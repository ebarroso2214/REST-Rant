require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Place = require('./places.js')
module.exports.Comment = require('./comment.js')