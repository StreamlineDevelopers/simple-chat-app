const express = require('express');
const router = express.Router();

//helper
const { upload } = require('../helper/fileHelper.js');
//controller
const userController = require('../controllers/UserController.js');

// use if protected
const verify = require('./verifyToken.js');

// routes
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/user', verify, userController.find);
router.put('/user/:id', verify, userController.update);
router.put('/change-password/:id', verify, userController.changePassword);
router.post('/upload', verify, upload.single('file'), userController.upload);

module.exports = router;