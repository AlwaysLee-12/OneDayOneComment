const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const moment = require("moment");
const Schema=mongoose.Schema

const recordedSchema = mongoose.Schema({
    userInfo:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    category:{
        type:String
    },
    title:{
        type:String
    },
    description:{
        type:String
    },
    registerDate:{
        type:Date
    }
})

const Recorded = mongoose.model('Recorded', recordedSchema);

module.exports = { Recorded }