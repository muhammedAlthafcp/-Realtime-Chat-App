import mongoose from "mongoose";

const DBconnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ MongoDB connected:`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};

export default DBconnection;


