const Product = require("../model/ProductModel");

module.exports = {
  getAll: (req, res) => {
    const param = req.query.sort;
    switch (param) {
      case "ascending":
        Product.find({ is_Delete: false })
          .sort({ price: 1 })
          .then((products) => {
            res.status(200).json(products);
          });
        break;
      case "decrease":
        Product.find({ is_Delete: false })
          .sort({ price: -1 })
          .then((products) => {
            res.status(200).json(products);
          });
        break;
      default:
        Product.find({ is_Delete: false }).then((products) =>{
          res.status(200).json(products);
        }
        );
    }
  },

  create: (req, res) => {
    Product.create(req.body).then(
      res.status(200).json({ message: "Create a new user Successfully!!" })
    );
  },

  getDetail: (req, res) => {
    Product.findById(req.params.productId).then((product) => {
      const { is_Delete, ...other } = product._doc;
            res.status(200).json({ ...other });
    });
  },

  update: (req, res) => {
    Product.findByIdAndUpdate(req.params.productId, req.body)
      .then(res.json({ message: "Cập nhật thành công!!" }))
      .catch((err) =>
        res.status(400).json({ message: "Cập nhật thất bại!!!", err })
      );
  },

  remove: async (req, res) => {
    const product = await Product.findById(req.id);

    product.is_Delete = true;

    product
      .save()
      .then(res.status(200).json({ message: "Xóa thành công!!" }))
      .catch((err) =>
        res.status(400).json({ message: "Xóa thất bại!!!", err })
      );
  },

  delete: (req, res) => {
    Product.findByIdAndDelete(req.params.productId)
      .then(res.json({ message: "Xóa thành công!!" }))
      .catch((err) =>
        res.status(400).json({ message: "Xóa thất bại!!!", err })
      );
  },
};
