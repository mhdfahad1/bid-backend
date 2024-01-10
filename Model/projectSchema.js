const mongoose=require('mongoose')

const projectSchema=new mongoose.Schema({
    slNo:{
        type:String,
        required:true
    },
    assemblyName:{
        type:String,
        required:true
    },
    length:{
        type:String,
    },
    quantity:{
        type:String,
    }
})

const projects=mongoose.model("projects",projectSchema)
module.exports=projects
