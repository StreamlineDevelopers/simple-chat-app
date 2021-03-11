const express = require('express');
const router = express.Router();

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

// messages routes
router.get('/messages', verify, userController.getMessages);
router.post('/messages', verify, userController.postMessages);

module.exports = router;