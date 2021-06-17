const express = require('express');
const router = express.Router();
const { Comment } = require("../models/Comment");
const {Recorded}= require("../models/Recorded");
const { auth } = require("../middleware/auth");

//=================================
//             Comment
//=================================

router.post("/uploadComment", auth,(req, res) => {
    if(req.body.category=="명언") req.body.category=0
    else if(req.body.category=="바이블") req.body.category=1
    else if(req.body.category=="영문장") req.body.category=2
    else req.body.category=3

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

router.post("/getComment", auth,(req, res) => {
    
    Comment.find({category:req.body.commentId})
        .exec((err,comments)=>{               
            if(err) return res.status(400).json({success:false, err})
            for(let i=0;i<comments.length;i++){      
                Recorded.exists({title:comments[i].title},function(err,result){    
                if(i<comments.length&&(!result)){  
                    return res.status(200).json({success: true, comment:comments[i]})
                }         
                })    
            }              
    })
});

router.post("/saveComment", auth,(req, res) => {
    const recorded= new Recorded(req.body)
    recorded.save((err,doc)=>{
        if(err) return res.status(400).json({success:false, err})
        return res.status(200).json({success:true})
    })
});

module.exports = router;