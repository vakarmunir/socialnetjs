var express = require('express');
var cors = require('cors');
var router = express.Router();
var  PostController = require('./post.controller');

router.use(cors());
postController = new PostController();
router.get('/' , postController.getAllPosts);
router.get('/:id' , postController.getOnePost);
router.post('/' , postController.createPost);
router.patch('/:id' , postController.updatePost);

module.exports = router;