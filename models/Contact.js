const mongoose=require("mongoose")
const schema=mongoose.Schema
const ContactSchema= new schema({
    name:{
        type:String,
    },
    phone:{
        type:Number,
    },
    email:{
        type:String,
        unique:true,
    },
   
    dateCreation:{
       type:Date,
       default:Date.now()
    }
  
})
module.exports=Contact=mongoose.model("contacts",ContactSchema)