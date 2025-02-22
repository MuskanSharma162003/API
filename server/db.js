import mongoose from "mongoose";
export const dbConnect=async()=>{
    try{
     mongoose.connect(process.env.MONGO_URL)
     console.log("mongodb connected")
    }
    catch(err){
        console.log("error while connecting to database")
    }
}