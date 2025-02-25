import express from "express"
import { Get, Register } from "../controllers/userController.js"
let router=express.Router()

router.route("/register").post(Register)


// router.get('/home' , (req , res)=>{
//     res.send("Home Test")
// })

router.route("/home").get(Get)

export default router