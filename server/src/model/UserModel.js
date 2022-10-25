const { mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema(
  {
    username: {
      type: String,
      minlength: 6,
      maxlength: 20,
    },
    password: {
      type: String,
      require: true,
      minlength: 8,
    },
    name: {
      type: String,
      default: "#user",
    },
    image: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
      require: true,
      minlength: 11,
      unique: true,
      index: true,
    },
    gender: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
    },
    role: {
      type: Number,
      default: 2,
    },
    cart_id: {
      type: String,
    },
    is_Delete: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", User);
