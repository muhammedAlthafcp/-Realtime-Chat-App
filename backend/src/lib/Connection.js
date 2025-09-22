import mongoose from "mongoose";

const DBconnection = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.Mongodb_URL)
        console.log("mongodb connection running")
    }catch(error){
        console.log("error" ,+error)
    }
    
}
export default DBconnection;