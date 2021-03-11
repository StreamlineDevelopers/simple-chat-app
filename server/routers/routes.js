const express = require('express');
const router = express.Router();

//helper
const { upload } = require('../helper/fileHelper.js');
//controller
const userController = require('../controllers/UserController.js');

// use if protected
const verify = require('./verifyToken.js');

// routes
router.get('/', userController.initial);
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/user', verify, userController.find);
router.put('/user/:id', verify, userController.update);
router.put('/change-password/:id', verify, userController.changePassword);
router.post('/upload', verify, upload.single('file'), userController.upload);

// messages routes
router.get('/messages', verify, userController.getMessages);
router.post('/messages', verify, userController.postMessages);

module.exports = router;