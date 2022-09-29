const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Category = new Schema({
    name: { type: String, require: true },
    image: { type: String }
});

module.exports = mongoose.model("Category", Category);
