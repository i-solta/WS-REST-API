const mongoose=require("mongoose")
const schema=mongoose.Schema
const ContactSchema= new schema({
    name:{
        type:String,
    },
   
  
    dateCreation:{
       type:Date,
       default:Date.now()
    }
  
})
module.exports=Contact=mongoose.model("contacts",ContactSchema)