const Review = require("../model/ReviewModel");
const User = require("../model/UserModel");
const Product = require("../model/ProductModel");

module.exports = {
  CreateReview: async (req, res, next) => {
    const user = await User.findById(req.user.id);
    const review = new Review({
      product_id: req.body.product_id,
      name: user.name,
      rating: req.body.rating,
      comment: req.body.comment,
    });

    review
      .save()
      .then(res.status(200).json({ message: "Đánh giá thành công" }))
      .catch((err) =>
        res.status(400).json({ message: "Đánh giá không thành công", err })
      );
    next();
  },

  GetAll: async (req, res) => {
    Review.find({ is_Delete: false }).then((review) => {
      res.status(200).json(review);
    });
  },

  GetReviewProduct: async (id) => {
    return await Review.find({ product_id: id, is_Delete: false });
  },

  RemoveReview: async (req, res) => {
    const review = await Review.findById(req.id);
    review.is_Delete = true;
    review
      .save()
      .then(res.status(200).json({ message: "Xóa đánh giá thành công" }))
      .catch((err) =>
        res.status(400).json({ message: "Lỗi!!! Không thể xóa comment", err })
      );
  },

  Rating: async (req, res) => {
    let rate = 0;
    const product = await Product.findById(req.body.product_id);
    const review = await Review.find({ product_id: req.body.product_id });
    for (let item of review) {
      rate += item.rating;
    }
    product.rating = (rate / review.length).toFixed(1);
    console.log(product.rating);
    product.save();
  },
};
