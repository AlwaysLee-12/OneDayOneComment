const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const moment = require("moment");

const commentSchema = mongoose.Schema({
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

const Comment = mongoose.model('Comment', commentSchema);

module.exports = { Comment }