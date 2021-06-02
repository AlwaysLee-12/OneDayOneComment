const express = require('express');
const router = express.Router();
const { Comment } = require("../models/Comment");

const { auth } = require("../middleware/auth");

//=================================
//             Comment
//=================================

router.post("/uploadComment", auth,(req, res) => {

    const comment= new Comment(req.body)

    comment.save((err,doc)=>{
        if(err) return res.status(400).json({success:false, err})
        return res.status(200).json({success:true})
    })
});

module.exports = router;