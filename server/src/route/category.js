const categoryController = require("../controller/CategoryController");

module.exports = function (app) {
  app
    .route("/category")
    .get(categoryController.getAll)
    .post(authCtrl.verifyTokenAdmin, categoryController.create);

  app
    .route("/category/:categoryId")
    .get(categoryController.getDetail)
    .put(authCtrl.verifyTokenAdmin, categoryController.update)
    .delete(authCtrl.verifyTokenAdmin, categoryController.delete);
};
