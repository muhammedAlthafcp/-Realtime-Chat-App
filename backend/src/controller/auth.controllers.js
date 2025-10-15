import bcrypt from "bcryptjs";
import User from "../models/Users.js";
import { generateToken } from "../lib/utils.js";
import { sendWelcomeEmail } from "../emails/email.Handlers.js";
import { createWelcomeEmailTemplate } from "../emails/email.tamplate.js"; // ✅ Make sure to import this

import dotenv from "dotenv";
dotenv.config();

export const signup = async (req, res) => {
  const { FullName, Email, Number, Password } = req.body;

  try {
    // Validate input
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

    // Generate token
    const token = generateToken(newUser._id);

    // Send welcome email
    const clientURL = process.env.CLIENT_URL
    await sendWelcomeEmail(newUser.Email, newUser.FullName, clientURL);

    // Response
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
    if (!Email || !Password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ Email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(Password, existingUser.Password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = generateToken(existingUser._id);

    // ✅ Send welcome email on login (optional — usually only on signup)
    const clientURL = process.env.CLIENT_URL || "http://localhost:5173";
    const emailTemplate = createWelcomeEmailTemplate(existingUser.FullName, clientURL);
    await sendWelcomeEmail(existingUser.Email, existingUser.FullName, clientURL);

    // ✅ Respond with token & redirect URL
    res.status(200).json({
      message: "Login successful",
      token,
      redirect: `${clientURL}/home`, // frontend can redirect user here
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
  res.cookie("jwt", "", { maxAge: 0, httpOnly: true });
  res.status(200).json({ message: "Logout successfully" });
};

export const updateProfile = async (req, res) => {
  res.send("Profile update route");
};
