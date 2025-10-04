import express from "express";
import dotenv from "dotenv";
import cookie from "cookie-parser"

import authRoute from "./routes/auth.js";
import MessageChat from "./routes/messages.js";
import DBconnection from "./lib/Connection.js";
import cookieParser from "cookie-parser";
import cors from "cors"
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(cookieParser())

// DB connection
DBconnection();

const PORT = process.env.PORT || 5000;

// Routes
app.use("/api/auth", authRoute);
app.use("/api/messages", MessageChat);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
