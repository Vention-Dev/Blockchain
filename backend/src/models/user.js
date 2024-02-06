const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, default: "Shivam kumar" },
  email: {
    type: String,
    unique: true,
    default: "shivam6862mau@gmail.com",
  },
  contactNumber: {
    type: String,
    default: "1234567890",
  },
  profilePicture: {
    type: String,
    default: "https://avatars.githubusercontent.com/u/115404926",
  },
  creatingDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  walletAddress: { type: String, default: "0x" },
});

const user = mongoose.model("user", userSchema);

module.exports = user;
