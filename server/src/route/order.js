const orderController = require("../controller/OrderController");
let authCtrl = require("../controller/AuthController");

module.exports = function (app) {
  app.route("/order").post(authCtrl.verifyToken, orderController.CreateOrder);
};
