const mongoose = require("mongoose");
const moment = require('moment');

const ActivitySchema = mongoose.Schema({
    published : {type:Date, default:Date.now},
    actor : {        
        user : {type: mongoose.Schema.Types.ObjectId , ref: 'Users'}
    },
    verb: {type:String , default:"posted"}, //shared , liked
    object : {        
        post : {type: mongoose.Schema.Types.ObjectId, ref: 'Post'}
    },
    target : {        
        post : {type: mongoose.Schema.Types.ObjectId , ref: 'Post'}
    },
});

ActivitySchema.methods.toJSON = function(){
    var activity = this;
    var {_id, published, actor, verb, object, target} = activity.toObject();    
    var publishedTimeSpan = moment(published).fromNow();        
    return {_id, published, actor, verb, object, target, publishedTimeSpan};
}
const Activity = mongoose.model("Activity", ActivitySchema);
module.exports = Activity;
