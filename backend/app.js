const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

//remote server via mongo atlas
//mongoose.connect('mongodb+srv://kjsuarez:' + process.env.MONGO_ATLAS_PW + '@anothertextadventure-ddkor.mongodb.net/text-adventure-db?retryWrites=true')

// local server via $ mongod
// mongoose.connect(process.env.DATABASE_URL)
// or
// "DATABASE_URL": "mongodb://localhost:27017/code-test-db"

mongoose.connect('mongodb+srv://kjsuarez:' + process.env.MONGO_ATLAS_PW + '@anothertextadventure-ddkor.mongodb.net/greenslate-test?retryWrites=true')
.then(() => {
    console.log("Connected to database!");
})
.catch(() => {
  console.log("Connection failed!");
});

const rootRoute = require('./routes/smoketest');
const userRoutes = require('./routes/user');
const seederRoutes = require('./routes/seed');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use('/', rootRoute);
app.use('/users', userRoutes);
app.use('/seed', seederRoutes)

module.exports = app;
