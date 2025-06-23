const express= require('express')
const userRouter= require('./routes/user.routes.js');
const app = express();

app.set('view engine', 'ejs');

app.use('/user', userRouter);

app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(express.json()); // Middleware to parse JSON bodies


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});  