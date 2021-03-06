const mongoose = require("mongoose");

// Banner Schema
const bannerSchema = new mongoose.Schema({
    image: {type: String, unique: true},  
    value: {type: String, unique: true},  
},{
    timestamps: true,
});

module.exports = Banner = mongoose.model("banner", bannerSchema);

// Sample code on making a Model
// const userSchema = new mongoose.Schema({
//     email: {type: String, required: true, unique: true},
//     password: {type: String, required: true, minlength: 5},
//     displayName: {type: String},
// });

// module.exports = User = mongoose.model("user", userSchema); 