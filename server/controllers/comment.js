const commentService= require("../services/comment")

const comment={
    uploadComment: async (req, res) => {
        try{
            const commentExist= await commentService.findComment(req.body.title)
            if(commentExist) return res.json({success:false, message: 'Your Comment is Already Exist! Try Another One'})
            const commentResult= await commentService.uploadComment(req.body)
            return res.json({success:true})
        }catch(err){
            console.log(err)
        }
    },

    getComment: async (req, res) => {
        try{    
            const comments= await commentService.findComments(req.body.commentId)
            if(comments.length==0) return res.json({success:false})
            let comment
            for(let i=0;i<comments.length;i++){
                let result= await commentService.isExistInRecorded(comments[i].title)
                if(!result){
                    comment=comments[i]
                    break
                } 
                comment="Complete!"
            }
            return res.status(200).json({success: true, comment:comment})
        }catch(err){
            console.log(err)
        }
    },

    saveComment: async (req, res) => {
        try{
            const recorded= await commentService.saveComment(req.body)
            return res.json({success:true})
        }catch(err){
            console.log(err)
        }
    }
}
module.exports= comment