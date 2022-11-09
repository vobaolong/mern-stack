const cartController = require("../controller/CartController");
let authCtrl = require("../controller/AuthController");

module.exports = function (app) {
  // Xem giỏ hàng của user đang đăng nhập
  app.route("/cart").get(authCtrl.verifyToken, cartController.GetCart);

  // Thêm 1 sản phẩm vào giỏ hàng
  app.route("/cart/additem").post(authCtrl.verifyToken, cartController.AddItem);

  app
    .route("/cart/removeitem")
    .delete(authCtrl.verifyToken, cartController.RemmoveItem);

  app
    .route("/cart/updateitem")
    .put(authCtrl.verifyToken, cartController.UpdateItem);
};
