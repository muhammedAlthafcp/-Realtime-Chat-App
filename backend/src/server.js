import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import MessageChat from "./routes/message.routes.js";
import DBconnection from "./lib/Connection.js";

dotenv.config();

const app = express();




// Corrected: Add the JSON middleware here, before any routes that need to access the request body.
app.use(express.json());

DBconnection();

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoute);
app.use('/api/auth', MessageChat);


app.listen(PORT, () => {
  console.log(`Server is running`);
});