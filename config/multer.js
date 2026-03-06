const multer = require("multer");
const cloudinary = require("./cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: "men-drive",
  allowedFormats: ["jpg", "png", "jpeg", "pdf", "mp4"]
});

const upload = multer({ storage });

module.exports = upload;