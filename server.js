//1.import express
const express=require('express')
//2.
const app=express()
app.use(express.json())

const connectDB=require("./config/connectDB")

//connect to DB
connectDB()

//routes 
app.use("/api/contact",require("./routes/contact"))

//3.
const port=4000
//4.
app.listen(port,(err)=>{
    if(err){console.log("server not running")}
    else{console.log(`server is runnig on port ${port}`)}
})