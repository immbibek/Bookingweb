import User from "../models/Users.model.js"
export const register=async (req,req,next)=>{
    try {
        const newUser=new User({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,

        })

        await newUser.save()
        res.status(200).send("User created")
        
    } catch (err) {
        next(err)
        
    }

}