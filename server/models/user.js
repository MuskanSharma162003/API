
import mongoose from "mongoose"

export const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:String,
    age:Number
})

export const User=mongoose.model("profile",userSchema)