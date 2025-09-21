import express from "express"

const Router = express.Router()

Router.get("/message", (req,res)=>{
    res.send("hello")
})

export default MessageChat


