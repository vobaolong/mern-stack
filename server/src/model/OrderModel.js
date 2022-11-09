const { mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Order = new Schema(
  {
    user_id: { type: String },
    quantity: { type: Number, default: 0 },
    products: { type: Array },
    total: { type: Number, default: 0 },
    name: { type: String },
    phone: { type: String },
    address: { type: String },
    payed: { type: Boolean, default: false },
    state: { type: Number, default: 1 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", Order);
