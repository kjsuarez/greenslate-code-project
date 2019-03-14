var express = require('express');
var router = express.Router();

var User = require('../models/user');
var Project = require('../models/project');
var UserProject = require('../models/user-project');

router.get('/', function(req, res, next) {

  for (var i = 0; i < 10; i++) {
    var user = new User({
      first_name: ("first "+ i),
      last_name: ("last "+ randomInt(100))
    });

    user.save(function (err, result) {
      if (err) {
        console.log(err)
      }
      console.log("user saved")
    });

    for (var j = 0; j < 5; j++) {
      var date = new Date()
      var start_date = date.setDate(date.getDate() + randomInt(20) + 1)
      var end_date = date.setDate(date.getDate() + randomInt(20) + 1)
      var assigned_date = new Date().setDate(date.getDate() + randomInt(20) + 1)

      var project = new Project({
        startDate: start_date,
        endDate: end_date,
        credits: (randomInt(5) + 1)
      });

      project.save(function (err, result) {
        if (err) {
          console.log(err)
        }
        console.log("project saved")
      });

      var user_project = new UserProject({
        userId: user,
        projectId: project,
        isActive: (randomInt(2) > 0),
        assignedDate: assigned_date
      });

      user_project.save(function (err, result) {
        if (err) {
          console.log(err)
        }
        console.log("user_project saved")
      });

    }

  }

  res.status(200).json({
    message: 'success',
    obj: "db seeded"
  });
});

function randomInt(upto) {
  return Math.floor(Math.random() * Math.floor(upto))
}

module.exports = router;
