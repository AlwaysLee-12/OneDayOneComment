const express = require('express');
const router = express.Router();
const { Comment } = require("../models/Comment");

const { auth } = require("../middleware/auth");

//=================================
//             Comment
//=================================

router.post("/uploadComment", auth,(req, res) => {

    Comment.findOne({title:req.body.title})
        .exec((err,user)=>{
            if(err) return res.status(400).json({success:false, err})
            else if(user) return res.json({success:false, message: 'Your Comment is Already Exist! Try Another One'})
            const comment= new Comment(req.body)
            comment.save((err,doc)=>{
                if(err) return res.status(400).json({success:false, err})
                return res.status(200).json({success:true})
            })
        })
});

module.exports = router;