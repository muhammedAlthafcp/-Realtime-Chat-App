import express from "express";
const router = express.Router();

// Example routes
router.get("/Login", (req, res) => {
  res.send("Login route working");
});

router.get("/Logout", (req, res) => {
  res.send("Logout route working");
});

// This is important: default export
export default router;    
