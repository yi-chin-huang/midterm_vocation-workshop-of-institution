// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const RegisterSchema = new Schema(
  {
    name: String,
    birthdate: Date,
    pid: String,
    school: String,
    grade: String,
    email: String,
    mobile: String,
    phone: String,
    emergency_name: String, 
    emergency_mobile: String,
    emergency_line: String,
    diet: String,
    need: String,
    location: String,
    fee: String,
    dream_job: String,
    motive: String,
    expect: String,
  })



// Creating a table within database with the defined schema
const Register = mongoose.model('register', RegisterSchema);

// Exporting table for querying and mutating
module.exports = Register;
