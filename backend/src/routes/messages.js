// src/routes/messages.js
import express from "express";

const router = express.Router();
import { getAllContacts,getMessagesByUserId,sendMessage, getChatPartners } from "../controller/message.router.js";
import { protectRouter } from "../middlewere/auth.middlewere.js"



// Example route
router.get("/contacts",protectRouter, getAllContacts);
router.get("/chats",protectRouter, getChatPartners);
router.get("/:id",protectRouter, getMessagesByUserId);
router.post("/send/:id",protectRouter, sendMessage);




export default router;
