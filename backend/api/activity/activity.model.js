const mongoose = require("mongoose");

const ActivitySchema = mongoose.Schema({
    published : {type:Date, default:Date.now},
    actor : {
        objectType : {type: String, default: 'user'}, //user, page, group
        _id : {type: mongoose.Schema.Types.ObjectId} //userId
    },
    verb: {type:String , default:"posted"}, //shared , liked
    object : {
        objectType : {type: String, default: 'post'},
        _id : {type: mongoose.Schema.Types.ObjectId} //postId (vid,aud,img)
    },
    target : {
        objectType : {type: String},
        _id : {type: mongoose.Schema.Types.ObjectId} //postId (in album)
    },
});

const Activity = mongoose.model("Activity",ActivitySchema);
module.exports = Activity;
