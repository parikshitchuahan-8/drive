const express = require('express');
const authMiddleware = require("../middleware/auth");
const router = express.Router();
const upload = require("../config/multer");
const fileModel = require("../models/files.model.js");
const auth = require('../middleware/auth');
const cloudinary = require('../config/cloudinary');
const axios = require('axios');
const path = require('path');


router.get("/home",authMiddleware, async (req,res)=>{

  
  const userFiles= await fileModel.find({ user: req.user.id});
console.log(userFiles);
 
res.render("home",{
  files: userFiles
});

});

router.post("/upload-file",authMiddleware, upload.single("file"),async (req, res) => {


const  newFile = await fileModel.create({
  path: req.file.path,  
  originalname: req.file.originalname,
  user:req.user.id
});

res.json(newFile); 

   //res.send(req.file); 

  // try {  
  //   const fileUrl = req.file.path;
  //   res.render("home", { url: fileUrl });
  //   res.send(req.file); // You can render or redirect based on your logic
  // } catch (err) {
  //   console.error(err);
  //   res.status(500).send("File upload failed.");
  // }
   

})

router.get("/download/:publicId", authMiddleware, async (req, res) => {
  const loggedInUserId = req.user.id;
  const publicId = req.params.publicId;

  const file = await fileModel.findOne({
    path: { $regex: publicId },
    user: loggedInUserId,
  });

  if (!file) {
    return res.status(404).send("File not found or you do not have permission to download it.");
  }

  try {
    const response = await axios({
      url: file.path,
      method: 'GET',
      responseType: 'stream',
    });

    const fileExtension = path.extname(file.path);
    const fileName = file.originalname || `download${fileExtension}`;

    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
    res.setHeader('Content-Type', response.headers['content-type']);

    response.data.pipe(res);
  } catch (err) {
    console.error("Error downloading file:", err.message);
    res.status(500).send("Error downloading file.");
  }
});


module.exports = router;