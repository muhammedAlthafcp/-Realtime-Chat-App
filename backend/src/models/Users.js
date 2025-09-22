import mongoose, { Types } from "mongoose";

const Userschema = new mongoose.Schema(
    {
        Email:{
            Type:String,
            require:true,
            unique:true
        },
         FullName:{
            Type:String,
            require:true,
           
        },
         Password :{
            Type:Number,
            require:true,
            minlength:5
        },
         Number:{
            Type:Number,
            require:true,
            unique:true
        },
         Profilepic:{
            Type:String,
             default:""

            
    }}
);


const User = mongoose.model("User",Userschema)

export default User