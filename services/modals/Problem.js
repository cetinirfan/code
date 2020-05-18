const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Problem = new Schema({
    telephone:{
        type:Number
    },
    category:{
        type:Number,
        default:0
    },
    type:{
        type:Number,
        default:0
    },
    description:{
        type:String
    },
    problemPhoto:{
        type:String,
        default:'',
    },
    lat: {
        type: String,
        default:0
    },
    lon: {
        type: String,
        default:0
    },
    problemCreated:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model('Problem', Problem);
