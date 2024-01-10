const mongoose=require('mongoose')

const subcategorySchema=new mongoose.Schema({
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

const subcategories=mongoose.model("subcategories",subcategorySchema)
module.exports=subcategories
