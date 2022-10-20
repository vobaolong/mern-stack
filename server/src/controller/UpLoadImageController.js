const cloudinary = require("cloudinary").v2;

module.exports = {

  upLoadFile: async (req, res, next) => {
    let folder = "images"

    if (req.query.folder) folder = req.query.folder
    const file = req.files.image;

    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      public_id: `${Date.now()}`,
      resource_type: "auto",
      folder: folder,
    });

    req.body.image = result.url

    next()
  }
   
}