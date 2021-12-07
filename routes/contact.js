const express=require("express");
const router=express.Router();
const Contact=require("../models/Contact")
router.get("/",(req,res)=>{
    res.send("test is the mssg ")
})

//path localhost:4000/api/contact/add
//add contact
router.post('/add',(req,res)=>{
    const name=req.body.name;
    const newContact= new Contact({
        name,
        
    
    });
    newContact.save()
    .then((contact)=>res.json({msg:"contact added",contact:contact}))
    .catch((err)=>console.log(err))

})

module.exports=router