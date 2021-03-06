const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type:String,
        max: 255,
        required: true
    },
    lastName: {
        type: String,
        max: 255,
        required: true
    },
    email: {
        type:String,
        max: 255,
        required: true
    },
    password: {
        type: String,
        max: 1024,
        min: 6,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User', userSchema);

module.exports = { User }