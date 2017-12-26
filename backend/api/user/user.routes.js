var express = require('express');
var router = express.Router();
var {authenticate} = require('../../middleware/authenticate');

var  UserController = require('./user.controller');

userController = new UserController();
router.get('/me' , authenticate , userController.me);
router.post('/' , userController.create);
router.post('/login' , userController.login);
router.delete('/me/token' , userController.deleteToken);

module.exports = router;