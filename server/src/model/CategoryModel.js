const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Category = new Schema(
  {
    name: { type: String, require: true },
    image: { type: String },
    is_Delete: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Category", Category);
