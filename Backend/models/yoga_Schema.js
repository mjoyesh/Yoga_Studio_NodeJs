let mongoose = require('mongoose');
let schema = mongoose.Schema;

let yogaTableSchema = new schema({
  types: String,
  ideal: String,
  sweat: Number,
  peace: Number
});

module.exports = mongoose.model("yogaTableSchema",yogaTableSchema); 