const { mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Review = new Schema(
  {
    product_id: { type: String },
    name: { type: String },
    rating: { type: Number, default: 5 },
    comment: { type: String },
    is_Delete: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", Review);
