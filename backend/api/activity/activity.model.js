const mongoose = require("mongoose");

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

const Activity = mongoose.model("Activity",ActivitySchema);
module.exports = Activity;
