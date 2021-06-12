const express = require('express');
const router = express.Router();
const { Comment } = require("../models/Comment");
const {Recorded}= require("../models/Recorded");
const { auth } = require("../middleware/auth");

//=================================
//             Recorded
//=================================

router.get("/getRecorded", auth,(req, res) => {
    Recorded.find({userInfo:req.body.userInfo})
        .exec((err,results)=>{
            if(err) return res.status(400).json({success:false, err})
            return res.status(200).json({success:true, comments:results})
        })
});

module.exports = router;