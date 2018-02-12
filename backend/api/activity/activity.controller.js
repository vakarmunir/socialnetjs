var {ObjectId} = require('mongodb');
var Activity = require('./activity.model');

class ActivityController{
    async getAllActivities(req , res){
        try{
            const activities = await Activity.find()
            .populate("object.post", "content")            
            .populate("actor.user" , "profile.displayname");            
            res.status(200).set({ 'content-type': 'application/json;charset=utf-8' }).json(activities);
        }catch(e){
            res.status(400).send(e);
        }    
    }
    async getOneActivity(req , res){
        let id = req.params.id;
        if(!ObjectId.isValid(id)){
            return res.status(404).send({message : "id invalid!"});
        }
        try{
            const activities = await Activity.findOne({_id : id});        
            res.status(200).send(activities);
        }catch(e){
            res.status(400).send(e);
        }
    }
    async createActivity(req , res){
        try{
            var activity = new Activity({...req.body});
            var activityGen = await activity.save();        
            res.status(201).send(activityGen);
        }catch(e){
            res.status(400).send(e);
        }
    }

    async updateActivity(req , res){
        let id = req.params.id;
        const {subject} = req.body;        
        if(!ObjectId.isValid(id)){
            return res.status(404).send({message : "id invalid!"});
        }
        try{
            var activity = await Activity.findOneAndUpdate( {_id : id},{$set : {subject}},{new:true} );
            res.send(activity);
        }catch(e){
            res.status(400).send(e);
        }
    }

}

module.exports = ActivityController;