const express = require('express');
const router = express.Router();
const { Comment } = require("../models/Comment");
const {Recorded}= require("../models/Recorded");
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

router.post("/getComment", auth,(req, res) => {
    
    Comment.find({category:req.body.commentId})
        .exec((err,comments)=>{   
            let Comment
            let flag=false           
            if(err) return res.status(400).json({success:false, err})

            const isDuplicated= function(i){
                return new Promise(function(resolve, reject){
                    let result= Recorded.exists({title:comments[i].title})
                    resolve(result)
                })
            }

            const commentResult= async function(){
                    for(let i=0;i<comments.length;i++){                        
                        let result= await isDuplicated(i) 
                        if(!result){
                            Comment=comments[i] 
                            flag=true
                        }        
                    }
                    if(!flag) Comment="Complete!"
                return new Promise(function(resolve, reject){
                    resolve(Comment)    
                })
            }

            async function getComment(){
                try{
                    let toUserComment= await commentResult()
                    return res.status(200).json({success: true, comment:toUserComment})
                }catch(err){
                    console.log(err)
                }
            }
            getComment()       
    })
})
router.post("/saveComment", auth,(req, res) => {
    const recorded= new Recorded(req.body)
    recorded.save((err,doc)=>{
        if(err) return res.status(400).json({success:false, err})
        return res.status(200).json({success:true})
    })
});

module.exports = router;