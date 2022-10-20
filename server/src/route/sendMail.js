const mailController = require("../controller/SendEmailController");

module.exports = function (app) {
    app
    .route("/sendmail")
    .post(mailController.sendMail)
    
};
