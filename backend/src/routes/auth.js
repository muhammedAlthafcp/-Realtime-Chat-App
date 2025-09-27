import express from "express";
const router = express.Router();
import { protectRouter } from "../middlewere/auth.middlewere.js";

import { signup,login,logout,updateProfile} from "../controller/auth.controllers.js";

// Routes
router.post("/signup", signup);
router.post("/login",login)
router.post("/logout", logout);
router.post("/update-profile", protectRouter ,updateProfile);   
router.get("/check", protectRouter, (req, res) => res.status(200).json(req.user));

export default router;


