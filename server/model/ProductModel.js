const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Product = new Schema({
  name: { type: String },
  categoryid: { type: String },
  subcategoryid: { type: String },
  type: {
    type: Array,
    Object,
    config: { type: String },
    color: { type: String },
    quantity: { type: Number },
  }
});

module.exports = mongoose.model("Product", Product);