const express=require("express");
const router=express.Router();
const Contact=require("../models/Contact")
// router.get("/",(req,res)=>{
//     res.send("test is the mssg ")
// })

//path localhost:4000/api/contact/add
//add contact
router.post('/add',(req,res)=>{
    const {name,phone,email}=req.body;
    const newContact= new Contact({
        name,
        phone,
        email
    });
    newContact.save()
    .then((contact)=>res.json({msg:"contact added",contact:contact}))
    .catch((err)=>console.log(err))

})

//get all contacts

router.get("/all",(req,res)=>{
    Contact.find()
    .then((contacts)=>res.send(contacts))
    .catch(err=>console.log(err))
})

//delete
router.delete("/delete/:id",(req,res)=>{
    const {id}=req.params
    Contact.findOneAndDelete({_id:id})
    .then(contacts=>res.send(contacts))
    .catch(err=>console.log(err))

})

//get contact by id
router.get("/:id",(req,res)=>{
    const {id}=req.params
    Contact.findOne({_id:id})
    .then(contacts=>res.send({msg:"get contact by id",contacts}))
    .catch(err=>console.log(err))
})

//edit contact
router.put("/editContact/:_id",async(req,res)=>{
    const{_id}=req.params
    const{name,email,phone}=req.body
    try{
   const contact=  await Contact.findOneAndUpdate({_id},{$set:{name,email,phone}},{new : true})
  
    res.send({msg:"contact edited",contact})
    }
    catch (error){
        console.log(error)
    }

})
module.exports=router