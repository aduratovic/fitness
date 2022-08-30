const mongoose = require('mongoose')
const {enums} = require('../global')
const {exercises} = require('../global')

const exerciseSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required: true,
        enum : [...enums.type]
    },
    weightTrainingType:{
        type:String,
        enum: [...enums.weightTrainingType]
    },
    name:{
        type:String,
        enum: [...enums.name,'Legs']
    },
    exercise:{
        type:String,
        required:true,
        enum: [...exercises]
    },
    duration:{
        type:Number,
        default:0
    },
    distance:{
        type:Number,
        default:0 
    },
    speed:{
        type:Number,
        default:0 
    },
    incline:{
        type:Boolean,
        default:false 
    },
    stairsClimbed:{
        type:Number,
        default:0 
    },
    weights:{
        type:Number,
        default:0 
    },
    sets:{
        type:Number,
        default:0 
    },
    reps:{
        type:Number,
        default:0 
    },
    date: { 
        type: Number
    }
}, {
    timestamps:true
})

module.exports = mongoose.model('Exercise',exerciseSchema)