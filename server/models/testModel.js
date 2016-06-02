const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var TestSchema = new Schema({
  name:{
    type: String,
    trim: true,
    default: '',
  }
});

module.exports = mongoose.model('TestSchema', TestSchema);