const cloudinary = require("cloudinary").v2;
const fileUpload = require("express-fileupload");

module.exports = function (app) {
  let authRoute = require("./auth");
  let userRoute = require("./user");
  let categoryRoute = require("./category");
  let productRoute = require("./product");
  let mailRoute = require("./sendMail");
  let authGoogleRoute = require("./authGoogle");

  app.use(
    fileUpload({
      useTempFiles: true,
      limits: { fileSize: 50 * 2024 * 1024 },
      createParentPath: true,
    })
  );

  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });

  authGoogleRoute(app);

  authRoute(app);

  mailRoute(app);

  userRoute(app);

  categoryRoute(app);

  productRoute(app);
};
