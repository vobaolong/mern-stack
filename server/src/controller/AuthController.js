const bycypt = require("bcrypt");
const User = require("../model/UserModel");
const jwt = require("jsonwebtoken");
const cartCtrl = require("./CartController")

let otp_code = "";

module.exports = authController = {
  // Đăng ký
  register: async (req, res) => {
    try {
      //Kiểm tra xem đã tồn tại username hay chưa
      if (await User.findOne({ username: req.body.username }))
        throw res
          .status(400)
          .json({ message: "Đã tồn tại username: " + req.body.username });

      //Kiểm tra xem đã tồn tại email hay chưa
      if (await User.findOne({ email: req.body.email }))
        throw res
          .status(400)
          .json({ message: "Đã tồn tại email: " + req.body.email });

      //Kiểm tra OTP người dùng nhập có giống với OTP đã generate ra hay không
      if (req.body.otp != otp_code)
        throw res.status(404).json({ message: "Mã OTP chưa chính xác!!! " });

      //Hash password
      const salt = await bycypt.genSalt(10);
      const hashed = await bycypt.hash(req.body.password, salt);

      //Taoj cart cho user
      const cart_id = await cartCtrl.CreateCart()

      //Lưu thông tin user với password đã hash
      const newUser = await new User({
        username: req.body.username,
        email: req.body.email,
        password: hashed,
        name: req.body.name,
        image: req.body.image,
        gender: req.body.gender,
        cart_id: cart_id
      });

      //Lưu user vào DB
      User.create(newUser).then(
        res.status(200).json({
          message: "Đăng ký thành công tài khoản username: " + newUser.username, newUser
        })
      ).catch(err => res.status(400).json({
        message: "Đăng ký thất bại", err
      }));

      req.email = newUser.email
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Tạo OTP gửi email
  gernerateOTP: () => {
    var otp = Math.random();
    otp = otp * 1000000;
    otp = parseInt(otp);
    otp_code = otp + "";
    return otp;
  },

  // Tạo access Token
  generateAccessToken: (user) => {
    //Đăng ký 1 jwt token lưu trữ thông tin id, username, role
    return jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
        cart_id: user.cart_id
      },
      //Mã bí bật của token
      process.env.JWT_ACCESS_KEY,
      {
        //Thời gian hết hạn
        expiresIn: "30m",
      }
    );
  },

  // Tạo 1 Jwt Token lưu trữ để dùng khi accept Token hết hạn
  generateRefreshToken: (user) => {
    //Tương tự như tạo access Token
    return jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
        cart_id: user.cart_id
      },
      process.env.JWT_REFRESH_KEY,
      {
        expiresIn: "365d",
      }
    );
  },

  // Đăng nhập
  login: async (req, res) => {
    try {
      //Tìm user có username khi yêu cầu đăng nhập
      const user = await User.findOne({ username: req.body.username });
      //Nếu không có thì trả về lỗi
      if (!user) {
        return res
          .status(404)
          .json({ message: "Không tìm thấy username: " + req.body.username });
      }

      //So sánh password user nhập với password đã hash xem có giống nhau không
      const vaildPassword = await bycypt.compare(
        req.body.password,
        user.password
      );

      //Nếu sai password thì trả về lỗi
      if (!vaildPassword) {
        return res.status(404).json({ message: "Mật khẩu không chính xác " });
      }

      //Nếu đúng username và password
      if (user && vaildPassword) {
        //Tạo accessToken và refreshtoken khi đăng nhập thành công
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
        return res.status(200).json({ ...other, accessToken });
      }
    } catch (error) {
      return res.status(500).json(err);
    }
  },

  // Tạo mới Access Token bằng Refresh Token khi access Token hết hạn
  requestRefreshToken: async (req, res) => {
    //Lấy RefreshToken từ cookies
    const refreshToken = req.cookies.refreshToken;

    //Nếu không có RefreshToken thì trả về lỗi
    if (!refreshToken)
      return res.status(401).json({ message: "Bạn chưa đăng nhập!!!" });

    //Xác nhận refreshToken này có đúng không
    jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
      //Nếu có lỗi thì trả về lỗi
      if (err) {
        console.log(err);
      }

      //Tạo mới Accesstoken và RefreshToken
      const newAccessToken = authController.generateAccessToken(user);
      const newRefreshToken = authController.generateRefreshToken(user);

      //Lưu RefreshToken mới vào cookie
      res.cookie("refreshToken", newRefreshToken, {
        httpOnly: true,
        secure: false,
        path: "/",
        sameSite: "strict",
      });

      res.status(200).json({ AccessToken: newAccessToken });
    });
  },

  // Xác thực Access Token
  verifyToken: (req, res, next) => {
    //Lấy token từ Header
    const token = req.headers.token;
    if (token) {
      //Format token: Bearer dfhdsfhdfhdsh...
      //Jwt Token sẽ là đoạn chuỗi sau Bearer nên sẽ dùng split để tách ra
      const accessToken = token.split(" ")[1];
      //Xác thực token
      jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
        //Nếu có lỗi thì trả về lỗi
        if (err) {
          res.status(403).json({ message: "Token đã hết hạn" });
        }
        //lấy thông tin user gắn vào req
        req.user = user;
        //Middleware để thực hiện chức năng tiếp theo
        next();
      });
    } else {
      res.status(401).json("Bạn chưa có quyền để truy cập");
    }
  },

  // Kiểm tra quyền Admin bằng Jwt token
  verifyTokenAdmin: (req, res, next) => {
    //Gọi hàm xác thực token
    authController.verifyToken(req, res, () => {
      //Kiểm tra role của user, nếu là 1 là admin, 2 là user
      if (req.user.role == 1) {
        //Middleware để thực hiện chức năng tiếp theo
        next();
      } else {
        res
          .status(403)
          .json({ message: "Bạn không có quyền thực hiện thao tác này" });
      }
    });
  },

  // Đăng xuất
  logout: (req, res) => {
    res.clearCookie("refreshToken");
    res.status(200).json({ message: "Bạn đã đăng xuất" });

    console.log(req.session);
  },
};
