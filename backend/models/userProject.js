var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  userId: {type: Schema.Types.ObjectId, ref: 'User'},
  projectId: {type: Schema.Types.ObjectId, ref: 'Project'},
  isActive: {type: Boolean},
  assignedDate: {type: Date}
});

module.exports = mongoose.model('userProject', schema);
