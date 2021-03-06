const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//model 
const { User } = require('../models/User.js');

// validation
const {registerValidation, loginValidation} = require('../validation.js');

// User Routes

//#region Register
router.post('/register', async (req, res) => {
    // destructure error and value
    const {error, value} =  registerValidation(req.body);

    // if error send the message response
    if(error) return res.status(400).send(error.details[0].message); 

    // email duplication validation
    const isEmailExist = await User.findOne({email: req.body.email});
    if(isEmailExist) return res.status(400).send('Email already exists!')
    
    // generate a salt
    const salt = await bcrypt.genSalt(10);  
    // combine the current password with a salt to make it complex
    const hashedPassword = await bcrypt.hash(req.body.password, salt); 

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword
    }) // create a new user that receives a json request.

    try {
        const savedUser = await user.save();
        // return only the user id
        res.send({user: user._id}); 
    } catch (error) {
        res.status(400).send(error);
    }

    // res.send(value)
});
//#endregion

//#region Login
router.post('/login', async (req, res) => {
    // destructure error and value
    const {error, value} =  loginValidation(req.body);

    // if error send the message response
    if(error) return res.status(400).send(error.details[0].message); 

    // if email exist
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Email doesnt exists.');

    // valid password
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword) return res.status(400).send('Invalid password.');

    //create a jwt token when logged in
    const token = jwt.sign({_id: user._id}, process.env.JWT_TOKEN);

    //put the token on the header and send it back if success
    res.header('jwt-token', token).send(token);
});
//#endregion


module.exports = router;