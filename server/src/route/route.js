
module.exports = function (app) {
  let authRoute = require("./auth");
  let userRoute = require("./user");
  let categoryRoute = require("./category");
  let productRoute = require("./product");
  let mailRoute = require("./sendMail");
  let authGoogleRoute = require("./authGoogle");

  authGoogleRoute(app);

  authRoute(app);

  mailRoute(app);

  userRoute(app);

  categoryRoute(app);

  productRoute(app);
};
