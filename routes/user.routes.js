const express = require('express');
const router = express.Router();
const{ body, validationResult } = require('express-validator');   
const userModel = require('../models/user.model.js');
const bcrypt = require('bcrypt');
const Jwt = require('jsonwebtoken');


router.get('/register', (req, res) => {
    res.render("register");
});


router.post('/register',
  body("username").trim().isLength({ min: 3 }),
  body("email").trim().isEmail().isLength({ min: 10 }),
  body("password").trim().isLength({ min: 6 }),
  async (req, res) => {
    console.log("Received req.body:", req.body);  // 👈 DEBUG LOG

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("Validation errors:", errors.array()); // 👈 LOG ERRORS
      return res.status(400).json({ errors: errors.array(), message: "invalid data" });
    }

    const { username, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({ username,
         email,
          password: hashPassword
         });
    res.json(newUser);
  }
);


router.get('/login', (req, res) => {
    res.render("login");    })

    router.post('/login',
  body("username").trim().isLength({ min: 3 }),
    body("password").trim().isLength({ min: 6 }),
async (req, res) => {

    const errors= validationResult(req);
    if(!errors.isEmpty()){          
        return res.status(400).json({ errors: errors.array(),
             message: "invalid data" });
    } 

    const { username, password } = req.body;

    const user= await userModel.findOne({ 
        username: username
    });
    if(!user){
        return res.status(400).json({ message: "Username or password  is incorrect" });
    }
    const isMATCH = await bcrypt.compare(password, user.password);
    if(!isMATCH){
        return res.status(400).json({ message: "Username or password is incorrect" });
    } 

    //jasonwebtoken//

    const token=Jwt.sign({

        id: user._id,
        username: user.username,
        email: user.email
    },
    process.env.JWT_SECRET, );


    res.cookie("token", token);
    res.send("login success",);
       



})
    module.exports = router;