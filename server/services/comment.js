const { Comment } = require("../models/Comment")
const {Recorded}= require("../models/Recorded");

const comment={
    findComment: async (title)=>{
        const comment= Comment.findOne({title:title})
        return comment
    },

    findComments: async (commentId)=>{
        const comments= Comment.find({category:commentId})
        return comments
    },

    uploadComment: async (commentContent)=>{
        const comment= new Comment(commentContent)
        const commentResult= comment.save()
        return commentResult
    },

    isExistInRecorded: async (title)=>{
        const result= Recorded.exists({title:title}) 
        return result
    },

    saveComment: async (commentContent)=>{
        const recorded= new Recorded(commentContent)
        const recordedResult= recorded.save()
        return recordedResult
    }
}

module.exports= comment