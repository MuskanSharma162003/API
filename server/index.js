import express from "express"
import { dbConnect } from "./db.js"
const app=express()
import dotenv from "dotenv"
import { Register } from "../controllers/userController.js"
dotenv.config()

app.use(express.json())
app.post("/register",Register)

const port=5000
app.listen(port,()=>{
    dbConnect()
    console.log("server is running on",port)
})