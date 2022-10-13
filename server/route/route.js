module.exports = function (app) {

  let authRoute = require("./auth")
  let userRoute = require("./user")
  let categoryRoute = require("./category")
  let productRoute = require("./product")

  authRoute(app)

  userRoute(app)

  categoryRoute(app)

  productRoute(app)

}
