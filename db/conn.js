const mongoose=require('mongoose');

const db=process.env.DATABASE_URI;

mongoose.connect(db,{useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false}).then(()=>{console.log("DB Connected!")}).catch((error)=>{console.log(error)});