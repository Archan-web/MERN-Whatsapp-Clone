const express=require('express');
const Message=require('../models/message');

const router=express.Router();

router.get('/',(req,res)=>res.status(200).json({message:"Welcome to home!"}))

router.post('/createmessage',async(req,res)=>{
    try {
        const {message,name,timestamp,received}=req.body;
        const newMessage=await Message({message,name,timestamp,received});
        newMessage.save();
        res.status(201).json({message:"Message created!"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Message could not be created!"});
    }
})

router.get('/getmessages',async(req,res)=>{
    try {
        const messages=await Message.find();
        res.status(200).send(messages)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong!"});
    }
})

module.exports=router;