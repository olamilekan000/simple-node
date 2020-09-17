const mongoose = require("mongoose");

const { Schema } = mongoose;

const StudentSchema = new Schema({
  _id: String,
  firstName: String,
  lastName: String,
  email: String,
});

const studentModel = mongoose.model("students", StudentSchema);
module.exports = studentModel;
