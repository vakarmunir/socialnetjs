var {mongoose} = require('../../db/mongoose');
var {ObjectId} = mongoose;
var Schema = mongoose.Schema;

threadSchema = new Schema({
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

var thread = mongoose.model('Threads',threadSchema);
module.exports =  thread;