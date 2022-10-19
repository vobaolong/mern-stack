const categoryController = require("../controller/CategoryController");

module.exports = function (app) {
  app
    .route("/category")
    .get(categoryController.getAll)
    .post(categoryController.create);

  app
    .route("/category/:categoryId")
    .get(categoryController.getDetail)
    .put(categoryController.update)
    .delete(categoryController.delete);
};
