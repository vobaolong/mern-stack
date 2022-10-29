const orderController = require("../controller/OrderController");
let authCtrl = require("../controller/AuthController");

module.exports = function (app) {
  app.route("/order").post(authCtrl.verifyToken, orderController.CreateOrder).get(authCtrl.verifyToken, orderController.GetOrderByUser);

  app.route("/admin/order").get(authCtrl.verifyTokenAdmin, orderController.GetAll)

  app
    .route("/order/:orderId")
    .get(authCtrl.verifyToken, orderController.GetOrderById)
};
