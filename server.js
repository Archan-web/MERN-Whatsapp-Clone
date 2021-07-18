const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const Pusher = require("pusher");
const cors=require('cors');
require('dotenv').config({path:'./config.env'});
require('./db/conn');

const app=express();
const port =process.env.PORT || 6000;

app.use(bodyParser.json({limit:"50mb"}));
app.use(bodyParser.urlencoded({limit:"50mb",extended:true}));


app.use('/api/auth',require('./routes/auth'));
app.use(cors());

const pusher = new Pusher({
    appId: "1237379",
    key: "ef5ed5973589604d871d",
    secret: "30c992f7af00fb16261b",
    cluster: "ap2",
    useTLS: true
});

const db=mongoose.connection;

db.once("open",()=>{
    console.log("Connected!");

    const msgCollection=db.collection("messages");
    
    const chngStream=msgCollection.watch();

    chngStream.on("change",(change)=>{
        console.log(change);
        if(change.operationType=='insert'){
            const msgDetails=change.fullDocument;
            pusher.trigger('messages','inserted',{
                name:msgDetails.name,
                message:msgDetails.message,
                timestamp:msgDetails.timestamp,
                received:msgDetails.received
            })
        }
        else{
            console.log("Error occured!");
        }
    })
})

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})