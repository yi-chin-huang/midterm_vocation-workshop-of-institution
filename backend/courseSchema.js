const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const courseSchema = new Schema(
  {
    type: String,
    name: String,
    teacher: String,
    season: String,
    text: String,
    img: String,
  })


var connection = mongoose.createConnection('mongodb://localhost:3001/test');
// var Course0 = connection.model('course_introduction', courseSchema);
// Creating a table within database with the defined schema
const Course = mongoose.model('course', courseSchema);

// Exporting table for querying and mutating
module.exports = Course;

