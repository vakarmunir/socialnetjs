var express = require('express');
var router = express.Router();
var  PostController = require('./post.controller');

postController = new PostController();
router.get('/' , postController.getAllPosts);
router.get('/:id' , postController.getOnePost);
router.post('/' , postController.createPost);
router.patch('/:id' , postController.updatePost);

module.exports = router;