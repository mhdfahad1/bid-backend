const assemblies=require('../Model/assembySchema')

// get all assemblies
exports.getAssembles=async(req,res)=>{
    const searchKey = req.query.search || ''; 
    const query = {
        name: { $regex: String(searchKey), $options: 'i' }
    };
    try{
        const result=await assemblies.find(query)
        res.status(200).json(result)
    }catch (err) {
        console.error('Error!! Transaction failed:', err);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
}
