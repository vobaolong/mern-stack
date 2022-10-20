const User = require("../model/UserModel");
const authController = require("../controller/AuthController");

module.exports = authGoogle = {
  login: async (req, res) => {
    const email = req.user.email;

    if (!(await User.findOne({ email: email }))) {
      const newUser = await new User({
        email: email,
        name: req.user.displayName,
        image: req.user.picture,
      });
      User.create(newUser);

      const accessToken = authController.generateAccessToken(newUser);
      const refreshToken = authController.generateRefreshToken(newUser);

      //Lưu RefreshToken vào cookies
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false,
        path: "/",
        sameSite: "strict",
      });

      //Lấy thông tin user trừ pasword
      const { password, ...other } = newUser._doc;

      //Trả về thông tin user và accessToken cho FrontEnd
      res.status(200).json({ ...other, accessToken });
    } else {
      const user = await User.findOne({ email: email });

      const accessToken = authController.generateAccessToken(user);
      const refreshToken = authController.generateRefreshToken(user);

      //Lưu RefreshToken vào cookies
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false,
        path: "/",
        sameSite: "strict",
      });

      //Lấy thông tin user trừ pasword
      const { password, ...other } = user._doc;

      //Trả về thông tin user và accessToken cho FrontEnd
      res.status(200).json({ ...other, accessToken });

    }
  },
};
