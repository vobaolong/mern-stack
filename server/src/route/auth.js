
const authController = require("../controller/AuthController");

module.exports = function(app){

    app.route("/register").post(authController.register)

    app.route("/login").post(authController.login)

    app.route("/refreshToken").get(authController.requestRefreshToken)

    app.route("/logout").post( authController.logout)
}