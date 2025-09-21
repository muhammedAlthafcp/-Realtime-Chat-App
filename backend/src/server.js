import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js"; // match your folder name

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Use authRoute for all /api/auth paths
app.use("/api/auth", authRoute);

// Simple test routes
app.get("/api/auth/Login", (req, res) => {
  res.send("hello");
});

app.get("/api/auth/Logout", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Server is running `);
});

