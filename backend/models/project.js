var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  startDate: {type: Date},
  endDate: {type: Date},
  credits: {type: Number}
});

module.exports = mongoose.model('Project', schema);
