const productController = require("../controller/ProductController");
let authCtrl = require("../controller/AuthController");
const fileCtrl = require("../controller/UpLoadImageController");

module.exports = function (app) {
  app
    .route("/product")
    .get(productController.getAll)
    .post(authCtrl.verifyTokenAdmin, productController.create);

  app
    .route("/product/:productId")
    .get(productController.getDetail)
    .put(authCtrl.verifyTokenAdmin, productController.update)
    .post(authCtrl.verifyTokenAdmin, productController.remove)
    .delete(authCtrl.verifyTokenAdmin, productController.delete);

  app
    .route("/product/:productId/uploadimage")
    .put(
      authCtrl.verifyTokenAdmin,
      fileCtrl.upLoadFile,
      productController.update
    );

  app.route("/productByCategory").get(productController.getByCategory);
};
