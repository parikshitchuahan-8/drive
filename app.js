const express = require('express');
const userRouter = require('./routes/user.routes.js');
const dotenv = require('dotenv');
dotenv.config();

const connectToDB = require('./config/db.js');
connectToDB();
const cookieParser = require('cookie-parser');
const app = express();
const indexRouter = require('./routes/index.routes.js');


app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("user/login");
});
app.use("/",indexRouter);
app.use("/upload-file", indexRouter);

app.use("/user", userRouter);



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running");
});
