const userService= require("../services/users")

const users={
    auth: (req, res) => {
        res.status(200).json({
            _id: req.user._id,
            isAdmin: req.user.role === 0 ? false : true,
            isAuth: true,
            email: req.user.email,
            name: req.user.name,
            lastname: req.user.lastname,
            role: req.user.role,
            image: req.user.image,
        });
    },

    register: async (req, res) => {
        try{
            const user = await userService.register(req.body)
            return res.status(200).json({success: true});
        }catch(err){
            console.log(err)
        }
    },

    login: async (req, res) => {
        try{
            const user= await userService.findUser(req.body.email)
            if(!user) return res.json({loginSuccess: false,message: "Auth failed, email not found"})
    
            user.comparePassword(req.body.password,(err,isMatch)=>{
                //일치하지 않는 경우 예외처리
                if(!isMatch) return res.json({loginSuccess:false, message: '비밀번호를 잘못 입력하셨습니다'})
                //일치할 경우 토큰 생성
                user.generateToken((err,user)=>{
                    if(err) throw new Error("Token generate Error")
                    res.cookie('w_authExp',user.tokenExp).cookie('w_auth',user.token).status(200).json({loginSuccess:true, userId:user._id})
                })
            })
        }catch(err){
            console.log(err)
        }
    },

    logout: async (req, res) => {
        try{
            const result= await userService.logout(req.user._id)
            return res.status(200).json({success: true});
        }catch(err){
            console.log(err)
        }
    }
}

module.exports= users