const mongoose=require('mongoose')

const assemblySchema=new mongoose.Schema({
    slNo:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        unique:true
    },
    quantity:{
        type:String,
        required:true
    },
    fct1:{
        type:String,
        required:true
    },
    fct2:{
        type:String,
        required:true
    },
    catalog:{
        type:String,
        required:true
    }
})

const assemblies=mongoose.model('assemblies',assemblySchema)
module.exports=assemblies
