module.exports = function (app) {
  let authRoute = require("./auth");
  let userRoute = require("./user");
  let categoryRoute = require("./category");
  let productRoute = require("./product");
  let mailRoute = require("./sendMail");
  let authGoogleRoute = require("./authGoogle");
  let cartRoute = require("./cart");
  let orderRoute = require("./order");
  let reviewRoute = require("./review");

  authGoogleRoute(app);

  authRoute(app);

  mailRoute(app);

  userRoute(app);

  categoryRoute(app);

  reviewRoute(app);

  productRoute(app);

  cartRoute(app);

  orderRoute(app);
};
