const { User } = require("../models/User");

const user={
    register: async (userContent)=>{
        const user= new User(userContent)
        const userResult= user.save()
        return userResult
    },

    findUser: async (userEmail)=>{
        const user= User.findOne({email:userEmail})
        return user
    },

    logout: async (userId)=>{
        const result= User.findOneAndUpdate({ _id: userId }, { token: "", tokenExp: "" })
        return result
    }
}

module.exports=user