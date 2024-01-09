const mongoose=require('mongoose')

const categorySchema= new mongoose.Schema({
    id:{
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
    }
})

const categories=mongoose.model('categories',categorySchema)
module.exports=categories