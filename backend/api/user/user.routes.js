var express = require('express');
var cors = require('cors');
var router = express.Router();
var {authenticate} = require('../../middleware/authenticate');

router.use(cors());
var  UserController = require('./user.controller');

userController = new UserController();
router.get('/me' , authenticate , userController.me);
router.post('/' , userController.create);
router.post('/login' , userController.login);
router.delete('/me/token' , userController.deleteToken);

module.exports = router;