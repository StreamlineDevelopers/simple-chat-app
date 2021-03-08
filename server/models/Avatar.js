const mongoose = require('mongoose');

const avatarSchema = mongoose.Schema({
    fileName: {
        type:String,
        max: 255,
        required: true
    },
    filePath: {
        type: String,
        max: 255,
        required: true
    },
    fileType: {
        type:String,
        max: 255,
        required: true
    },
    fileSize: {
        type: String,
        max: 1024,
        min: 6,
        required: true
    },
    uid: {
        type: String,
        // required: true
    }
}, {timestamps: true});

const Avatar = mongoose.model('Avatar', avatarSchema);

module.exports = { Avatar }