const reviewController = require("../controller/ReviewController");
const authCtrl = require("../controller/AuthController");

module.exports = function (app) {
  app
    .route("/review")
    .get(authCtrl.verifyTokenAdmin, reviewController.GetAll)
    .post(
      authCtrl.verifyToken,
      reviewController.CreateReview,
      reviewController.Rating
    )
    .delete(reviewController.RemoveReview);
};
