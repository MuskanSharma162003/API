import { Register } from "./controllers/userController.js";
import express from "express";
import { dbConnect } from "./db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// Database connection
dbConnect();

app.use(express.json());
app.post("/register", Register);

// Export the app as a serverless function
export default app;
