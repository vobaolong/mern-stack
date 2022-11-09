const categoryController = require("../controller/CategoryController");
let authCtrl = require("../controller/AuthController");
const fileCtrl = require("../controller/UpLoadImageController");

module.exports = function (app) {
  app
    .route("/category")
    .get(categoryController.getAll)
    .post(authCtrl.verifyTokenAdmin, categoryController.create);

  app
    .route("/category/:categoryId")
    .get(categoryController.getDetail)
    .put(authCtrl.verifyTokenAdmin, categoryController.update)
    .post(authCtrl.verifyTokenAdmin, categoryController.remove)
    .delete(authCtrl.verifyTokenAdmin, categoryController.delete);

  app
    .route("/category/:categoryId/uploadimage")
    .put(
      authCtrl.verifyTokenAdmin,
      fileCtrl.upLoadFile,
      categoryController.update
    );
};
