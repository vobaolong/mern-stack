const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Product = new Schema({
  name: { type: String },
  image: { type: Array },
  shortDesc: { type: String },
  longDesc: { type: String },
  categoryid: { type: String, require: true },
  subcategoryid: { type: String, require: true },
  type: { type: Array },
  rating: { type: Number, default: 0 },
  sell: {type: Number, default: 0},
  technical: {type: Object, required: true}
});

<<<<<<< HEAD
module.exports = mongoose.model("Product", Product);
=======
module.exports = mongoose.model("Product", Product);
>>>>>>> 74b02bba427de3c1db00996b952372133dc78837
