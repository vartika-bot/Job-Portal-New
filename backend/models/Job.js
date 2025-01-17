// models/Job.js
const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  datePosted: {
    type: Date,
    default: Date.now,
  },
  applyLink: {
    type: String,
    required: true,
  }
});



module.exports = mongoose.model('Job', JobSchema);