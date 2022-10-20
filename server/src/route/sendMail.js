const mailController = require("../controller/SendEmailController");
const userController = require("../controller/UserController");

module.exports = function (app) {
  app.route("/sendmail/OTP").post(mailController.sendMailOTP);

  app
    .route("/sendmail/resetPassword")
    .post(userController.forgotPassword, mailController.sendMailResetPassword);
};
