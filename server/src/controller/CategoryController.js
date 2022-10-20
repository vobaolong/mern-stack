const Category = require("../model/CategoryModel");

module.exports = {
  getAll: (req, res) => {
    Category.find({}).then(categories => res.json(categories));
  },

  create: (req, res) => {
    Category.create(req.body).then(
      res.json({ message: "Create a new category Successfully!!" })
    );
  },

  getDetail: (req, res) => {
    Category.findById(req.params.categoryId).then((category) =>
      res.json(category)
    );
  },

  update: (req, res) => {
    Category.findByIdAndUpdate(req.params.categoryId, req.body)
      .then(res.json({ message: "Update Successfully!!"}))
      .catch((err) => res.json({ message: "Update Failed!!!" }));
  },

  delete: (req, res) => {
    Product.findByIdAndDelete(req.params.categoryId).then(
      res.json({ message: "Delete Successfully!!" })
    );
  },
};
