import jwt from "jsonwebtoken";

export const generateToken = (userId) => {
  const {JWT_SECRET} = process.env;
  if(!JWT_SECRET){
    throw new console.error("not now");
    
  }
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d", // token expiry (adjust as needed)
  });
};


