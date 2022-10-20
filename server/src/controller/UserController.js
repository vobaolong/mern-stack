const User = require("../model/UserModel");
const bycypt = require("bcrypt");

module.exports = userController = {
  getAll: (req, res) => {
    User.find({}).then((users) => res.status(200).json(users));
  },

  create: (req, res) => {
    User.create(req.body).then(
      res.json({ message: "Create a new user Successfully!!" })
    );
  },

  getDetailByEmail: (req, res) => {
    const user = User.findOne({ email: req.email });

    //Lấy thông tin user trừ pasword
    const { password, ...other } = user._doc;

    //Trả về thông tin user và accessToken cho FrontEnd
    res.status(200).json({ ...other });
  },

  myProfile: (req, res) => {
    User.findById(req.user.id)
      .then((user) => {
        //Lấy thông tin user trừ pasword
        const { password, ...other } = user._doc;

        //Trả về thông tin user và accessToken cho FrontEnd
        res.status(200).json({ ...other });
      })
      .catch((err) =>
        res.status(404).json({ message: "Can not find user", err })
      );
  },

  updateProfile: (req, res) => {
    User.findByIdAndUpdate(req.user.id, req.body)
      .then(res.json({ message: "Update Successfully!!" }))
      .catch((err) => res.json({ message: "Update Failed!!!", err }));
  },

  delete: (req, res) => {
    User.findByIdAndDelete(req.user.id).then(
      res.status(200).json({ message: "Delete Successfully!!" })
    );
  },

  verifyPassword: async (req, res, next) => {
    const user = await User.findById(req.user.id);
    if (!user) {
      throw res.status(404).json({ message: "Không tìm thấy" });
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
      .then(res.status(200).json({ message: "Password Changed SuccessFully" }))
      .catch((err) =>
        res.status(400).json({ message: "Password Changed Failed", err })
      );
  },

  forgotPassword: async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email});

    //Hash password
    const resetPassword = await Math.random().toString(36);
    const salt = await bycypt.genSalt(10);
    const hashed = await bycypt.hash(resetPassword, salt);

    //Cập nhật thông tin user với password đã hash
    user.password = hashed;

    user.save();
    req.password = resetPassword
    next()
  },
};
