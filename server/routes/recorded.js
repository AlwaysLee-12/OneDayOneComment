const express = require('express');
const router = express.Router();
const { Comment } = require("../models/Comment");
const {Recorded}= require("../models/Recorded");
const { auth } = require("../middleware/auth");

//=================================
//             Recorded
//=================================

router.post("/saveComment", auth,(req, res) => {
    const recorded= new Recorded(req.body)
    recorded.save((err,doc)=>{
        if(err) return res.status(400).json({success:false, err})
        return res.status(200).json({success:true})
    })
});

module.exports = router;