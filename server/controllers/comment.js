const { Comment } = require("../models/Comment");
const {Recorded}= require("../models/Recorded");

const comment={
    uploadComment:(req, res) => {
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
    },

    getComment: (req, res) => {
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
                    try{
                        for(let i=0;i<comments.length;i++){                       
                            let result= await isDuplicated(i) 
                            if(!result){
                                Comment=comments[i] 
                                flag=true
                                break
                            }        
                        }
                        if(!flag) Comment="Complete!"
                        return Comment
                    }catch(err) {
                        console.log(err)
                    }
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
    },

    saveComment: (req, res) => {
        const recorded= new Recorded(req.body)
        recorded.save((err,doc)=>{
            if(err) return res.status(400).json({success:false, err})
            return res.status(200).json({success:true})
        })
    }
}
module.exports= comment