const {Recorded}= require("../models/Recorded");

const recorded={
    getRecords: async (userInfo)=>{
        const records= Recorded.find({userInfo:userInfo}).populate('userInfo')
        return records
    }
}

module.exports= recorded