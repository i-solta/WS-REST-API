const mongoose=require('mongoose')
const config=require('config')
const connectDB=()=>{
    mongoose.connect(config.get("MONGOURI"))
    .then(()=>console.log("mongoose connected"))
    .catch(()=>console.log("erreur DB"))
}

module.exports=connectDB