import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    Email: {
      type: String,
      required: true,
      unique: true,
      trim: true, // removes extra spaces
      lowercase: true, // normalize email
    },
    FullName: {
      type: String,
      required: true,
      trim: true,
    },
    Password: {
      type: String,
      required: true,
      minlength: 6, // better security
    },
    Number: {
      type: Number,
      required: true,
      unique: true,
    },
    ProfilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true } // auto adds createdAt & updatedAt
);

const User = mongoose.model("User", UserSchema);

export default User;
