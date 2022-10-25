const User = require("../model/UserModel");
const bycypt = require("bcrypt");
const cartCtrl = require("./CartController");

module.exports = userController = {
  getAllActive: (req, res) => {
    User.find({ is_Delete: false }).then((users) => {
      const { password, is_Delete, ...other } = users._doc;

      res.status(200).json({ ...other });
    });
  },

  create: (req, res) => {
    User.create(req.body).then(
      res.status(200).json({ message: "Create a new user Successfully!!" })
    );
  },

  getDetailByEmail: (req, res) => {
    const user = User.findOne({ email: req.email });

    const { password, is_Delete, ...other } = user._doc;

    res.status(200).json({ ...other });
  },

  myProfile: (req, res) => {
    User.findById(req.user.id)
      .then((user) => {
        //Lấy thông tin user trừ pasword
        const { password, is_Delete, ...other } = user._doc;

        //Trả về thông tin user và accessToken cho FrontEnd
        res.status(200).json({ ...other });
      })
      .catch((err) =>
        res
          .status(404)
          .json({ message: "Không tìm thấy thông tin người dùng", err })
      );
  },

  updateProfile: (req, res) => {
    User.findByIdAndUpdate(req.user.id, req.body)
      .then(res.status(200).json({ message: "Cập nhật thành công!!" }))
      .catch((err) =>
        res.status(400).json({ message: "Cập nhật thất bại!!!", err })
      );
  },

  remove: async (req, res) => {
    const user = await User.findById(req.user.id);

    cartCtrl.RemoveCart(user.cart_id);

    user.is_Delete = true;
    user.save();

    res.status(200).json({ message: "Xóa thành công!!" });
  },

  delete: async (req, res) => {
    const user = await User.findById(req.user.id);

    cartCtrl.DeleteCart(user.cart_id);

    user.deleteOne();

    res.status(200).json({ message: "Xóa thành công!!" });
  },

  verifyPassword: async (req, res, next) => {
    const user = await User.findById(req.user.id);
    if (!user) {
      throw res.status(404).json({ message: "Mật khẩu không chính xác" });
    }

    const vaildPassword = await bycypt.compare(
      req.body.currentPassword,
      user.password
    );

    //Nếu sai password thì trả về lỗi
    if (!vaildPassword) {
      throw res.status(404).json({ message: "Mật khẩu không chính xác " });
    }
    next();
  },

  changePassword: async (req, res) => {
    const user = await User.findById(req.user.id);

    //Hash password
    const salt = await bycypt.genSalt(10);
    const hashed = await bycypt.hash(req.body.newPassword, salt);

    //Cập nhật thông tin user với password đã hash
    user.password = hashed;

    user
      .save()
      .then(res.status(200).json({ message: "Thay đổi mật khẩu thành công" }))
      .catch((err) =>
        res
          .status(400)
          .json({ message: "Thay đổi mật khẩu không thành công", err })
      );
  },

  forgotPassword: async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    //Hash password
    const resetPassword = await Math.random().toString(36);
    const salt = await bycypt.genSalt(10);
    const hashed = await bycypt.hash(resetPassword, salt);

    //Cập nhật thông tin user với password đã hash
    user.password = hashed;

    user.save();
    req.password = resetPassword;
    next();
  },
};
