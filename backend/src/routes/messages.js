// src/routes/messages.js
import express from "express";

const router = express.Router();

// Example route
router.get("/contacts", getAllContacts);
router.get("/chats", getChatPartners);



export default router;
