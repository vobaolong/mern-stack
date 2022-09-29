module.exports = function (app) {
  let userCtrl = require("../controller/UserController");
  let productCtrl = require("../controller/ProductController");
  let categoryCtrl = require("../controller/CategoryController");


  app
  .route("/user")
  .get(userCtrl.getAll)
  .post(userCtrl.create);

  app
    .route("/user/:userId")
    .get(userCtrl.getDetail)
    .put(userCtrl.update)
    .delete(userCtrl.delete);

  app
  .route("/product")
  .get(productCtrl.getAll)
  .post(productCtrl.create);

  app
  .route("/product/:productId")
  .get(productCtrl.getDetail)
  .put(productCtrl.update)
  .delete(productCtrl.delete);

  app
  .route("/category")
  .get(categoryCtrl.getAll)
  .post(categoryCtrl.create);

  app
  .route("/category/:categoryId")
  .get(categoryCtrl.getDetail)
  .put(categoryCtrl.update)
  .delete(categoryCtrl.delete);

}
