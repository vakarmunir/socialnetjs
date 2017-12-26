var {mongoose} = require('../../db/mongoose');
var {ObjectId} = mongoose;
var Schema = mongoose.Schema;

postSchema = new Schema({
    threadId: {
        type: Number,
        required: [true, 'thread not associated']
    },
    replyToId: {
        type: Number        
    },
    subject: {
        type: String,
        required: [true , 'Subjet is required!']
    },
    views: {
        type: Number,
        default: 0
    },
    sticky: {
        type: Boolean,
        default: false
    },
    user: {
        type: Number,
        required: [true, 'user not associated']
    }
});

var post = mongoose.model('Post',postSchema);
module.exports =  post;