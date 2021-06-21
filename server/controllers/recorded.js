const {Recorded}= require("../models/Recorded");

const recorded={
    getRecorded: (req, res) => {
        Recorded.find({"userInfo":req.body.userInfo})
            .populate('userInfo')
            .exec((err,results)=>{
                if(err) return res.status(400).json({success:false, err})
                return res.status(200).json({success:true, comments:results})
            })
    }
}

module.exports=recorded