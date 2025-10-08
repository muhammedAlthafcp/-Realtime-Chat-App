import bcrypt from "bcryptjs";
import User from "../models/Users.js";
import { generateToken } from "../lib/utils.js";
import { sendWelcomeEmail } from "../emails/email.Handlers.js";

import dotenv from "dotenv";
dotenv.config();

export const signup = async (req, res) => { 
  const { FullName, Email, Number, Password } = req.body;
    console.log(req.body); // 👈 check what frontend sends


  try {
    // Validate required fields
    if (!FullName || !Email || !Number || !Password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (Password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Check existing user
    const existingUser = await User.findOne({ Email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(Password, 10);

    // Create user
    const newUser = new User({
      FullName,
      Email,
      Number,
      Password: hashedPassword,
    });
    await newUser.save();
    console.log("New User ID:", newUser._id);

    // Generate token
    const token = generateToken(newUser._id);


    sendWelcomeEmail(newUser.Email, newUser.FullName, process.env.CLIENT_URL);

    // Respond to client
    res.status(201).json({
      message: "User created successfully",
      token,
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

export const login = async (req, res) => {
  const { Email, Password } = req.body;

  try {
    // 1. Validate input
    if (!Email || !Password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 2. Check if user exists
    const existingUser = await User.findOne({ Email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // 3. Compare password
    const isPasswordValid = await bcrypt.compare(Password, existingUser.Password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // 4. Generate JWT token
    const token = generateToken(existingUser._id);

    // 5. Respond with user data and token
    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        _id: existingUser._id,
        FullName: existingUser.FullName,
        Email: existingUser.Email,
      },
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const logout = async (req, res) => {
  res.cookie("jwt", "", { maxAge: 0, httpOnly: true }); // clear cookie
  res.status(200).json({ message: "Logout successfully" });
};

export const updateProfile = async (req,res)=>{
  res.send()
}
