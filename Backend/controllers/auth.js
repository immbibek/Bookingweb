import User from "../models/Users.model.js"
import bcrypt from "bcryptjs"

export const register=async (req,req,next)=>{
    try {
        const salt=bcrypt.genSaltSync(10)
        const hash=bcrypt.hashSync(req.body.password,salt)


        const newUser=new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,

        })

        await newUser.save()
        res.status(200).send("User created")
        
    } catch (err) {
        next(err)
        
    }

}


export const login=async (req,req,next)=>{
    try {
       const user=await User.findOne({username:req.body.username})

       if(!user) return next(createError(404,"User not found"))

        const  isPasswordCorrect=await bcrypt.compare(req.body.password,user.password)

        if(!isPasswordCorrect) return next(createError(400,"Wrong password or username"))

       const {password,isAdmin,...otherDetalis}=user._doc;

        res.status(200).json(...otherDetalis)
    } catch (err) {
        next(err)
        
    }

}