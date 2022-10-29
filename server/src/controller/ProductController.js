const Product = require("../model/ProductModel");
const ReviewCtrl = require("./ReviewController");

module.exports = ProductCtrl = {
  getAll: async (req, res) => {
    const param = req.query.sort;
    const page = parseInt(req.query.page) || 1;
    const perPage = req.query.maxResult || 10;
    let start = (page - 1) * perPage;
    let end = page * perPage;

    switch (param) {
      case "ascending":
        Product.find({ is_Delete: false })
          .sort({ price: 1 })
          .then((products) => {
            res.status(200).json({
              list: products.slice(start, end),
              total: products.length,
              totalPage: Math.ceil(products.length / perPage),
            });
          });
        break;
      case "decrease":
        Product.find({ is_Delete: false })
          .sort({ price: -1 })
          .then((products) => {
            res.status(200).json({
              list: products.slice(start, end),
              total: products.length,
              totalPage: Math.ceil(products.length / perPage),
            });
          });
        break;
      default:
        Product.find({ is_Delete: false }).then((products) => {
          res.status(200).json({
            list: products.slice(start, end),
            total: products.length,
            totalPage: Math.ceil(products.length / perPage),
          });
        });
    }
  },

  getByCategory: async (req, res) => {
    const id_category = req.query.id || null;
    const sort = req.query.sort;
    const page = parseInt(req.query.page) || 1;
    const perPage = req.query.maxResult || 10;
    let start = (page - 1) * perPage;
    let end = page * perPage;

    if (id_category) {
      switch (sort) {
        case "ascending":
          Product.find({ categoryid: id_category, is_Delete: false })
            .sort({ price: 1 })
            .then((products) => {
              res.status(200).json({
                list: products.slice(start, end),
                total: products.length,
                totalPage: Math.ceil(products.length / perPage),
              });
            });
          break;
        case "decrease":
          Product.find({ categoryid: id_category, is_Delete: false })
            .sort({ price: -1 })
            .then((products) => {
              res.status(200).json({
                list: products.slice(start, end),
                total: products.length,
                totalPage: Math.ceil(products.length / perPage),
              });
            });
          break;
        default:
          console.log("hmmm");
          Product.find({ categoryid: id_category, is_Delete: false }).then(
            (products) => {
              res.status(200).json({
                list: products.slice(start, end),
                total: products.length,
                totalPage: Math.ceil(products.length / perPage),
              });
            }
          );
      }
    } else {
      ProductCtrl.getAll(req, res);
    }
  },

  create: (req, res) => {
    Product.create(req.body).then(
      res.status(200).json({ message: "Create a new user Successfully!!" })
    );
  },

  getDetail: async (req, res) => {
    const product = await Product.findById(req.params.productId);
    const { is_Delete, ...otherProduct } = product._doc;
    const review = await ReviewCtrl.GetReviewProduct(product.id);
    res.status(200).json({ ...otherProduct, review });
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
