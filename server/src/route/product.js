const productController = require("../controller/ProductController");

module.exports = function (app) {
    app
    .route("/product")
    .get(productController.getAll)
    .post(productController.create);
  
    app
    .route("/product/:productId")
    .get(productController.getDetail)
    .put(productController.update)
    .delete(productController.delete);
};
