const recordedService= require("../services/recorded")

const recorded={
    getRecorded: async (req, res) => {
        try{
            const records= await recordedService.getRecords(req.body.userInfo)
            return res.status(200).json({success:true, comments:records})
        }catch(err){
            console.log(err)
        }      
    }
}

module.exports=recorded