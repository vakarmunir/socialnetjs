var express = require('express');
var router = express.Router();
var  ThreadController = require('./thread.controller');

threadController = new ThreadController();
router.get('/' , threadController.getAllThreads);
router.get('/:id' , threadController.getOneThread);
router.post('/' , threadController.createThread);
router.patch('/:id' , threadController.updateThread);

module.exports = router;