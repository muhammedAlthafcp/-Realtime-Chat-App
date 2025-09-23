import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    Email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    FullName: {
      type: String,
      required: true,
      trim: true,
    },
    Password: {
      type: String,
      required: true,
      minlength: 6,
    },
    Number: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    ProfilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("Users", UserSchema);

export default User;

