const categories=require('../Model/catogorySchema')

exports.getCategories=async(req,res)=>{
    try{
        const result=await categories.find()
        res.status(200).json(result)
    }catch (err) {
        console.error('Error!! Transaction failed:', err);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
}
