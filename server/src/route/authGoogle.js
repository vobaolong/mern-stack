const authGoogleCtrl = require("../controller/AuthGoogleController");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const passport = require("passport");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

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
