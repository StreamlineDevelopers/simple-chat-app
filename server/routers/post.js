const express = require('express');
const router = express.Router();

//model 
const { User } = require('../models/User.js');

// make it private
const verify = require('./verifyToken.js');

router.get('/', verify, (req, res) => {
    res.send(req.user);

    let query = User.findById(req.user);
    console.log(query)
});


module.exports = router;