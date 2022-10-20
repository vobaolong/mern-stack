const authGoogleCtrl = require("../controller/AuthGoogleController");
const passport = require("passport");

module.exports = function (app) {
  app
    .route("/auth/google")
    .get(passport.authenticate("google", { scope: ["email", "profile"] }));

  app.route("/google/callback").get(
    passport.authenticate("google", {
      successRedirect: "/loginSuccess",
      failureRedirect: "/loginFailure",
    })
  );

  app.route("/loginSuccess").get(isLoginIn, authGoogleCtrl.login);

  app.route("/loginFailure").get(async (req, res) => {
    res.json({ message: "Đăng nhập thất bại!!!" });
  });
  
};

function isLoginIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}
