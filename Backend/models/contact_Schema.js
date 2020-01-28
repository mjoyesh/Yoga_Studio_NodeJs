let mongoose = require('mongoose');
let schema = mongoose.Schema;

let contactSchema = new schema({
  name: String,
  phone: Number,
  email: String,
  message: String
});

module.exports = mongoose.model("contactSchema",contactSchema); 