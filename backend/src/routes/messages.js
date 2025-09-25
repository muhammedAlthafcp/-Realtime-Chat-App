// src/routes/messages.js
import express from "express";

const router = express.Router();

// Example route
router.get("/newchat", (req, res) => {
  res.json({ message: "Messages route is working ✅" });
});

export default router;
