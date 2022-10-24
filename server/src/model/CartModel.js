const { mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Cart = new Schema({
  quantity: { type: Number, default: 0 },
  products: { type: Array },
  total: { type: Number, default: 0 },
  is_Delete: {type: Boolean, default: false}
});

module.exports = mongoose.model("Cart", Cart);
