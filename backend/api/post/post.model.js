var {mongoose} = require('../../db/mongoose');
var {ObjectId} = mongoose;
var Schema = mongoose.Schema;

postSchema = new Schema({
    postType: {
        type: String,
        required: [true, 'no type associated'],
        default: "post"
    },    
    content: {
        type: String,
        required: [true , 'Please write something first!']
    },
    views: {
        type: Number,
        default: 0
    },
    sticky: {
        type: Boolean,
        default: false
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'user not associated']
    }
});

postSchema.methods.toJSON = function(){
    var post = this;
    var {_id , content} = post.toObject();
    return {_id , content};
}
var post = mongoose.model('Post',postSchema);
module.exports =  post;