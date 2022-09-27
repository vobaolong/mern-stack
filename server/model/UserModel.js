const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  username: { type: String },
  password: { type: String },
  name: { type: String, default: "#user" + Math.floor(Math.random() * 1000) },
  phone: { type: String, default: '' },
  email: { type: String, require: true },
  gender: { type: Number, default: 0 },
  image: { type: String, default: ''},
  role: { type: Number, default: 2 },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", User);
