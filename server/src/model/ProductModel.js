const { mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Product = new Schema(
  {
    name: { type: String },
    image: { type: String },
    shortDesc: { type: String },
    longDesc: { type: String },
    categoryid: { type: String, require: true },
    type: { type: Array },
    price: { type: Number },
    rating: { type: Number, default: 0 },
    sell: { type: Number, default: 0 },
    technical: { type: Object, required: true },
    is_Delete: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Products", Product);
