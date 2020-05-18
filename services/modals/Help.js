const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Help = new Schema({
    fullName:{
        type:String
    },
    tc:{
        type:String,
    },
    telephone:{
        type:Number,
    },
    address:{
        type:String,
    },
    lat: {
        type: String,
        default:0
    },
    schollName: {
        type: String
    },
    lon: {
        type: String,
        default:0
    },
    countPerson:{
        type:Number,
    },
    countMoney:{
        type:Number,
    },
    working:{
        type:Number,
    },
    socialSupport:{
        type:Number,
    },
    type:{
        type:Number,
    },
    status:{
        type:Number,
        default:0,
    },
    helpCreated:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model('Help', Help);
