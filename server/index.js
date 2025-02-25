import { Register } from "./controllers/userController.js";
import express from "express";
import { dbConnect } from "./db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port=process.env.PORT||8002

// Database connection
dbConnect();

app.use(express.json());
app.post("/api/register", Register);

// Export the app as a serverless function
app.listen(port,()=>{
    console.log("server run",port)
})
export default app;
