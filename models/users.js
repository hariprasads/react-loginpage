var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  username:{type:'String', default:''},
  email:{type:'String', default:''},
  password:{type:'String', default:''},
  mobile:{type:Number}
})

module.exports = mongoose.model('userSchema', userSchema)
