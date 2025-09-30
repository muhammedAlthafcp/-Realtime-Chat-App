// src/routes/messages.js
import express from "express";

const router = express.Router();
import { getAllContacts,getMessagesByUserId } from "../controller/message.router.js";
import { protectRouter } from "../middlewere/auth.middlewere.js"



// Example route
router.get("/contacts",protectRouter, getAllContacts);
// router.get("/chats", getChatPartners);
router.get("/:id", getMessagesByUserId);




export default router;
