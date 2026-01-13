import express from "express";
import cors from "cors";
import "dotenv/config";
import { dbConn } from "./config/dbConnect.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import knowledgeRouter from "./routes/knowledge.route.js";

// app configuration
const app = express();
const PORT = 8000;

// database connection
dbConn();

// parsing cookies
app.use(cookieParser());

// middleware
app.use(express.json());
app.use(cors({
    origin: "https://mern-knowledge-decay-tracker.vercel.app",
    credentials: true
}));


// API endpoints
app.use("/api/auth", authRouter);
app.use("/api/knowledge", knowledgeRouter);


// test endpoint
app.get("/test", (req, res) => {
    res.send("API is working")
})


// starting server
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
})