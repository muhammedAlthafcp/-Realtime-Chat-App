import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import MessageChat from "./routes/messages.js";
import DBconnection from "./lib/Connection.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// DB connection
DBconnection();

const PORT = process.env.PORT || 5000;

// Routes
app.use("/api/auth", authRoute);
app.use("/api/messages", MessageChat);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
