var {ObjectId} = require('mongodb');
var Thread = require('./thread.model');

class ThreadController{
    async getAllThreads(req , res){
        try{
            const threads = await Thread.find();        
            res.status(200).send(threads);
        }catch(e){
            res.status(400).send(e);
        }    
    }
    async getOneThread(req , res){
        let id = req.params.id;
        if(!ObjectId.isValid(id)){
            return res.status(404).send({message : "id invalid!"});
        }
        try{
            const threads = await Thread.findOne({_id : id});        
            res.status(200).send(threads);
        }catch(e){
            res.status(400).send(e);
        }
    }
    async createThread(req , res){
        try{
            var thread = new Thread({...req.body});
            var threadGen = await thread.save();        
            res.status(201).send(threadGen);
        }catch(e){
            res.status(400).send(e);
        }
    }

    async updateThread(req , res){
        let id = req.params.id;
        const {subject} = req.body;        
        if(!ObjectId.isValid(id)){
            return res.status(404).send({message : "id invalid!"});
        }
        try{
            var thread = await Thread.findOneAndUpdate( {_id : id},{$set : {subject}},{new:true} );
            res.send(thread);
        }catch(e){
            res.status(400).send(e);
        }
    }

}

module.exports = ThreadController;