import resend from "resend"
import dotenv, { config } from "dotenv"
dotenv.config()

export const resendclient = new resend(process.env.RESEND)

export const sender = {
    email: process.env.EMAIL_FROM,
    name: process.env.EMAIL_FROM_NAME

};