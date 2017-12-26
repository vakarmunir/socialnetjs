var {ObjectId} = require('mongodb');
var Post = require('./post.model');

class PostController{
    async getAllPosts(req , res){
        try{
            const threads = await Post.find();        
            res.status(200).send(threads);
        }catch(e){
            res.status(400).send(e);
        }    
    }
    async getOnePost(req , res){
        let id = req.params.id;
        if(!ObjectId.isValid(id)){
            return res.status(404).send({message : "id invalid!"});
        }
        try{
            const threads = await Post.findOne({_id : id});        
            res.status(200).send(threads);
        }catch(e){
            res.status(400).send(e);
        }
    }
    async createPost(req , res){
        try{
            var thread = new Post({...req.body});
            var threadGen = await thread.save();        
            res.status(201).send(threadGen);
        }catch(e){
            res.status(400).send(e);
        }
    }

    async updatePost(req , res){
        let id = req.params.id;
        const {subject} = req.body;        
        if(!ObjectId.isValid(id)){
            return res.status(404).send({message : "id invalid!"});
        }
        try{
            var thread = await Post.findOneAndUpdate( {_id : id},{$set : {subject}},{new:true} );
            res.send(thread);
        }catch(e){
            res.status(400).send(e);
        }
    }

}

module.exports = PostController;