const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Register = require("./registerSchema");
const Course = require("./courseSchema");

const API_PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "../vocational_workshop/build")));
const router = express.Router();

// this is our MongoDB database
const dbRoute = 'mongodb+srv://celery:celery123@myproject-p5ggp.mongodb.net/test?retryWrites=true';

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

// this is our get method
// this method fetches all available data in our database
router.get("/getData", (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// this is our update method
// this method overwrites existing data in our database
router.post("/updateData", (req, res) => {
  const { id, update } = req.body;
  Data.findOneAndUpdate(id, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our delete method
// this method removes existing data in our database
router.delete("/deleteData", (req, res) => {
  const { id } = req.body;
  Data.findOneAndDelete(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// this is our create methid
// this method adds new data in our database
router.post("/putData", (req, res) => {
  let data = new Data();

  const { id, message } = req.body;

  if ((!id && id !== 0) || !message) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.message = message;
  data.id = id;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

////////
router.get("/getCourses", (req, res) => {
  Course.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
    
  });
});


router.get("/getRegister", (req, res) => {
  Register.find((err, data) => {
    if (err) return res.json({ success: false, error: err });  
    return res.json({ success: true, data: data });
  });
});


// POST Register
router.post("/postRegister", (req, res) => {
  console.log(req.body);
  let postData = new Register();
  const { name, birthdate, pid, school, grade, email, mobile, phone, 
    emergency_name, emergency_mobile, emergency_line, diet, need, 
    location, fee, dream_job, motive, expect } = req.body;

  // if(!content || !title) {
  //   return res.json({ success: false, error: "INVALID INPUTS" });
  // }
 
  postData.name = name;
  postData.birthdate = birthdate;
  postData.pid = pid;
  postData.school = school;
  postData.grade = grade;
  postData.email = email;
  postData.mobile = mobile;
  postData.phone = phone;
  postData.emergency_name = emergency_name;
  postData.emergency_mobile = emergency_mobile;
  postData.emergency_line = emergency_line;
  postData.diet = diet;
  postData.need = need;
  postData.location = location;
  postData.fee = fee;
  postData.dream_job = dream_job;
  postData.motive = motive;
  postData.expect = expect;

  postData.save(err => {
    if(err)
      return res.json({ success: false, error: err });
    
    return res.json({ success: true });
  });
});

////////

// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));