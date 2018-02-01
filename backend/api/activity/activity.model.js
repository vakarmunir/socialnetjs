const mongoose = require("mongoose");

const ActivitySchema = mongoose.Schema({
    published : {type:Date, default:Date.now},
    actor : {
        objectType : {type: String},
        _id : {type: mongoose.Schema.Types.ObjectId} //userId
    },
    verb: {type:String , Default:"post"}, //share , like
    object : {
        objectType : {type: String},
        _id : {type: mongoose.Schema.Types.ObjectId} //postId (vid,aud,img)
    },
    target : {
        objectType : {type: String},
        _id : {type: mongoose.Schema.Types.ObjectId} //postId (in album)
    },
});

const Activity = mongoose.model("Activity",ActivitySchema);
module.exports = Activity;
