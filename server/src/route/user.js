const userController = require("../controller/UserController");
let authCtrl = require("../controller/AuthController")
const fileCtrl = require("../controller/UpLoadImageController");

module.exports = function (app) {
    app
    .route("/users")
    .get( authCtrl.verifyTokenAdmin, userController.getAll)     //Kiểm tra quyền Admin trước rồi mới getAll user
    .post(userController.create);
  
    app
      .route("/myprofile")
      .get(authCtrl.verifyToken ,userController.myProfile)
      .put(authCtrl.verifyToken, userController.update)

    app.route("/deleteme")
      .delete(authCtrl.verifyToken, userController.delete);

    app.route("/myprofile/uploadimage")
      .put(authCtrl.verifyToken, fileCtrl.upLoadFile, userController.update)
};
