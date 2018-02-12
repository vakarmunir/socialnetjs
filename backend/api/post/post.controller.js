var {ObjectId} = require('mongodb');
var Post = require('./post.model');
var User = require('../user/user.model');
var Activity = require('../activity/activity.model');
var {ObjectId} = require('mongodb');
var {waitTest} = require('../../utils/index');

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
            const userReq = {...req.body.user};
            const postReq = {...req.body.post};
            const user = await User.findOne({email: userReq.email});          
            var post = new Post({
                content: postReq.content,
                userId: user._id
            });
            var postGen = await post.save();                             
            const actor = {user: user._id};
            const object = {post: postGen._id};
            
            const activity = new Activity({actor,object});
            const activityGen = await activity.save();
            const activityEntity = await Activity.findOne({_id: activityGen._id}).populate('object.post', 'content').populate('actor.user', 'profile.displayname');            
            res.status(201).send(activityEntity);
        }catch(e){
            console.log("Exceptio: ",e);
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