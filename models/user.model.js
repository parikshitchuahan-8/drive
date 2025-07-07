const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: [3, 'Username must be at least 3 characters long'],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: [10, 'Email must be at least 10 characters long'],
    },
    password: {
        type: String,
        required: true,
        minlength:[6, 'Password must be at least 6 characters long']
    }
});

const user = mongoose.model('user', userSchema);

module.exports = user;