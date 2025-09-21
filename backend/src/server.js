import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js"; // match your folder name
import MessageChat from "./routes/message.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Use authRoute for all /api/auth paths
app.use("/api/auth", authRoute);
app.use('/api/auth', MessageChat);


app.listen(PORT, () => {
  console.log(`Server is running `);
});

