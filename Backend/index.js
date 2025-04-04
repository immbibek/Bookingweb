import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser";

const app=express();
dotenv.config()

// const connect=async ()=>{
//     try{
//         await mongoose.connect(process.env.MONGO);
//         console.log("connected to mogoDB")
    
//     }catch (error){
//         throw error;

//     }
//     mongoose.connection.on("disconneted",()=>{
//         console.log("MongoDb disconnected")
//     })

    

// }

app.get("/user",(req,res)=>{
    res.send("hello first request");
})

// middlewere 
app.use(cookieParser())
app.use((err,req,res,next)=>{
    const errorStatus =err.status || 500
    const errorMessage=err.message || "Something went wrong!"
    return res.status(500).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack
    })

})
app.use(express.json())
app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/rooms",roomsRoute)


app.listen(8800,()=>{
    // connect()
    console.log("Connected to backend.");
})