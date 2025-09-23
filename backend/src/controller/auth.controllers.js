import bcrypt from "bcryptjs"
import User from "../models/Users.js";
import { generateToken } from "../lib/utils.js";

export const signup = async (req, res) => {

  const { FullName, Email, Number, Password } = req.body;

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
    const existingUser = await User.findOne({Email});

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
   console.log(newUser._id);
   
    // Generate token (send to client)
    const token = generateToken(newUser._id); // make sure generateToken returns a string

    res.status(201).json({
      message: "User created successfully",
      token, // send JWT
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
