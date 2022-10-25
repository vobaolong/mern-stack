const cartController = require("../controller/CartController");
let authCtrl = require("../controller/AuthController");

module.exports = function (app) {
  app.route("/cart").get(authCtrl.verifyToken, cartController.GetCart);

  app.route("/cart/additem").post(authCtrl.verifyToken, cartController.AddItem);

  app
    .route("/cart/removeitem")
    .delete(authCtrl.verifyToken, cartController.RemmoveItem);

  app
    .route("/cart/updateitem")
    .put(authCtrl.verifyToken, cartController.UpdateItem);
};
