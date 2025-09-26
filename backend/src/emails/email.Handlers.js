import nodemailer from "nodemailer";
import { createWelcomeEmailTemplate } from "./email.tamplate.js";
import dotenv from "dotenv";
dotenv.config();

export const sendWelcomeEmail = async (email, name, clientURL) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD, // Gmail app password
      },
    });

    await transporter.sendMail({
      from: process.env.NODEMAILER_EMAIL,
      to: email,
      subject: "Welcome to Messenger!",
      html: createWelcomeEmailTemplate(name, clientURL),
    });

    console.log("Welcome email sent ✅");
  } catch (error) {
    console.error("Failed to send welcome email ❌", error);
  }
};
