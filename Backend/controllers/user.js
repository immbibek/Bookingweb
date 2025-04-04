import User from "../models/Users.model.js"


// update
export const updateUser =async (req,res,next)=>{
    try {
        const updatedUser=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json( updateUser)
          
      } catch (err) {
        next(err)
      }

}

// delete 
export const deleteUser =async (req,res,next)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User hase been deleted.")
          
      } catch (err) {
          next(err);
      }

}
// Get 
export const getUser =async (req,res,next)=>{
    try {
        const user=await User.findById(req.params.id)
        res.status(200).json(user)
          
      } catch (err) {
          next(err)
      }
      

}

// Get ALL
export const getUsers =async (req,res,next)=>{
    try {
        const users=await User.find(req.params.id)
        res.status(200).json(users)
          
      } catch (err) {
         next(err)
      }

}
