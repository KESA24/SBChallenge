const mongoose = require("mongoose");

const riderSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true,

    },
    RegDate:{
        type: Date,
        required: true,
        
    },
    Registered:{
        type:Boolean,
        default: false,
        required: true,

    },
    InTraining:{
        type:Boolean,
        default:false,
        required: true,
    },
    Activated:{
        type:Boolean,
        default: false,
        required: true,
    }
  
});

const rider = mongoose.model("rider", riderSchema);

module.exports = rider;