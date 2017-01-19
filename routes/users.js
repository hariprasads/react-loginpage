var express = require('express');
var router = express.Router();
var controllers = require('../controllers')

/* GET users listing. */
router.get('/', function(req, res, next) {
  var controller = controllers["users"]
  controller.find(null, function(err, results){
    if (err){
      res.json({
        confirmation: 'fail',
        message: err
      });
      return
    }
    res.json({
      confirmation: 'success',
      message: results
    });
  })

});

router.get('/:id', function(req, res, next){

  var id = req.params.id;
  var controller = controllers["users"]
  controller.findOne(id, function(err, result){
    if (err){
      res.json({
        confirmation: 'fail',
        message: 'Not Found'
      });
      return
    }
    res.json({
      confirmation: 'success',
      message: result
    });
  })

})

router.post('/', function(req, res, next){

  var controller = controllers['users']
  controller.create(req.body, function(err, result){
  if(err){
    res.json({
      confirmation:'fail',
      message: err
    })
    return
  }
  res.json({
    confirmation: 'success',
    message: result
  })
  })

})


module.exports = router;
