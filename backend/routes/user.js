var express = require('express');
var router = express.Router();

var User = require('../models/user');
var Project = require('../models/project');
var UserProject = require('../models/user-project');

router.get('/all', function(req, res, next) {
  // User.find({})
  // .exec(function(err, users) {
  //
  // })

  User.find({}, function (err, users) {
    console.log(users)
    res.status(200).json({
      message: 'success',
      obj: users
    });
  });
});

router.get('/:user_id/projects', function(req, res, next) {

  UserProject.find({userId: req.params.user_id})
  .populate('projectId')
  .exec(function(err, associations) {
    if (err) {
      return res.status(500).json({
        title: 'an error occured while retrieving association',
        error: err
      });
    }

    res.status(200).json({
      message: 'success',
      obj: associations
    });
  })
});

module.exports = router;
