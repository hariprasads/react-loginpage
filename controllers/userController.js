var user = require('../models/users')

module.exports = {

  create: function(params, callback){
    user.create(params, function(err, user){
      if (err){
        callback(err, null)
        return
      }
      callback(null, user)
    })
  },

  find: function(params, callback){
    user.find(params, function(err, users){
      if(err){
        callback(err, null)
        return
      }
      callback(null, users)
    })
  },

  findById: function(id, callback){
  user.findById(id, function(err, user){
    if(err){
      callback(err, null)
      return
    }
    callback(null, user)
  })
 },

  findOne: function(name, callback){
    user.findOne({username: new RegExp('^'+name+'$', "i")}, function(err, user) {
      if(err){
        callback(err, null)
        return
      }
      callback(null, user)
    })
  }

}
