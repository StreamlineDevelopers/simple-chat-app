const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    uid: {
        type:String,
    },
    firstName: {
        type:String,
        max: 255
    },
    message: {
        type: String,
        max: 255
    },
    dateCreated: {
        type: String
    }
})

const Message = mongoose.model('Message', messageSchema);

module.exports = { Message }