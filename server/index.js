
import express from "express";
import { dbConnect } from "./db.js";
import dotenv from "dotenv";
import router from "./router/route.router.js";

dotenv.config();
const app = express();
const port=process.env.PORT||8002

// Database connection
dbConnect();

app.use(express.json());
app.use("/api/reg",router)

// Export the app as a serverless function
app.listen(port,()=>{
    console.log("server run",port)
})
export default app;
