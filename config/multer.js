const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinary');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
   folder: 'men-drive', 
    allowed_formats: ['jpg', 'png', 'jpeg', 'pdf', 'mp4'],
    unique_filename: true, // Ensures unique filenames
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
