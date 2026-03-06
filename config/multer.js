const multer = require("multer");
const cloudinary = require("./cloudinary");
const storageCloudinary = require("multer-storage-cloudinary");

const CloudinaryStorage = storageCloudinary.CloudinaryStorage;

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "men-drive",
    allowed_formats: ["jpg", "png", "jpeg", "pdf", "mp4"],
  },
});

const upload = multer({ storage });

module.exports = upload;