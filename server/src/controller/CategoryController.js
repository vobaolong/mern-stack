const Category = require("../model/CategoryModel");

module.exports = {
  getAll: (req, res) => {
    Category.find({}).then((categories) => {
      const { is_Delete, ...other } = categories._doc;
      res.status(200).json({ ...other });
    });
  },

  create: (req, res) => {
    Category.create(req.body).then(
      res.json({ message: "Create a new category Successfully!!" })
    );
  },

  getDetail: (req, res) => {
    Category.findById(req.params.categoryId).then((category) => {
      const { is_Delete, ...other } = category._doc;
      res.status(200).json({ ...other });
    });
  },

  update: (req, res) => {
    Category.findByIdAndUpdate(req.params.categoryId, req.body)
      .then(res.json({ message: "Cập nhật thành công!!" }))
      .catch((err) => res.json({ message: "Cập nhật thất bại!!!" }));
  },

  remove: async (req, res) => {
    const category = await Category.findById(req.id);

    category.is_Delete = true;

    category
      .save()
      .then(res.status(200).json({ message: "Xóa thành công!!" }))
      .catch((err) =>
        res.status(400).json({ message: "Xóa thất bại!!!", err })
      );
  },

  delete: (req, res) => {
    Category.findByIdAndDelete(req.params.categoryId).then(
      res.json({ message: "Xóa thành công!!" })
    );
  },
};
