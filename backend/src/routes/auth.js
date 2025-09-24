import express from "express";
const router = express.Router();

import { signup} from "../controller/auth.controllers.js";


// Routes
router.post("/signup", signup);// router.post("/login", login);
// router.get("/logout", logout);
// router.put("/update-profile", updateProfile);

export default router;



