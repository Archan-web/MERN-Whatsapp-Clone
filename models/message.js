const mongoose=require('mongoose');

const messageSchema=new mongoose.Schema({
    message:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    timestamp:{
        type:String,
        required:true
    },
    received:{
        type:Boolean,
        required:true
    }
})

const Message=new mongoose.model("messages",messageSchema);

module.exports=Message;