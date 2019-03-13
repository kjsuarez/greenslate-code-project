const mongoose = require('mongoose');
const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");

var User = require('./models/user');
var Project = require('./models/project');
var UserProject = require('./models/userproject');

mongoose.connect("mongodb://localhost:27017/code-test-db")
.then(() => {
    console.log("got this far");
})
.catch(() => {
  console.log("Connection failed!");
});

function randomInt(upto) {
  return Math.floor(Math.random() * Math.floor(upto))
}


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
    var start_date = date.setDate(date.getDate() + randomInt(5) + 1)
    var assigned_date = date.setDate(date.getDate() + randomInt(5) + 1)
    var end_date = date.setDate(date.getDate() + randomInt(5) + 1)

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
