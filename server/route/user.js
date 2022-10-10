const userController = require("../controller/UserController");
let authCtrl = require("../controller/AuthController")

module.exports = function (app) {
    app
    .route("/user")
    .get( authCtrl.verifyTokenAdmin, userController.getAll)     //Kiểm tra quyền Admin trước rồi mới getAll user
    .post(userController.create);
  
    app
      .route("/user/:userId")
      .get(userController.getDetail)
      .put(userController.update)
      .delete(userController.delete);
};
