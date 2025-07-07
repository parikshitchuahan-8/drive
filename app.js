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

// ✅ Body parsers must come first
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/",indexRouter);
app.use("/upload-file", indexRouter);
// ✅ Routes after body parsing middleware
app.use("/user", userRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
