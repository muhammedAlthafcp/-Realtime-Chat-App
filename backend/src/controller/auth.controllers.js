import bcrypt from "bcrypt";
import User from "../models/User.js"; // adjust path if needed
import { generateToken } from "../lib/utils.js";

export const signup = async (req, res) => {
  const { FullName, Email, Number, Password } = req.body;

  try {
    // Check required fields
    if (!FullName || !Email || !Number || !Password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check password length
    if (Password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ Email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(Password, 10);

    // Create new user
    const newUser = new User({
      FullName,
      Email,
      Number,
      Password: hashedPassword,
    });
    if(newUser){
        generateToken(newUser._id)
            await newUser.save()
        
    }

    res.status(201).json({
      message: "User created successfully",
      user: {
        _id: newUser._id,
        FullName: newUser.FullName,
        Email: newUser.Email,
      },
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
