const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  Email: {
    type: String,
    required:true,
    unique:true
  },
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
