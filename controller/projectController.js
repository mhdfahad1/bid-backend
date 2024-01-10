const projects = require('../Model/projectSchema')

// add projects
exports.addProject = async (req, res) => {
    const { slNo, assemblyName, length, quantity } = req.body
    try {
        const existingProject = await projects.findOne({ assemblyName })
        if (existingProject) {
            res.status(406).json("project already exist")
        } else {
            const newProject = new projects({
                slNo, assemblyName, length, quantity
            })
            await newProject.save()
        }
    } catch (err) {
        console.error('Error!! Transaction failed:', err);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
}

// get all projects
exports.getProjects = async (req, res) => {
    const searchKey = req.query.search || '';
    const query = {
        assemblyName: { $regex: String(searchKey), $options: 'i' }
    };
    try {
        const result = await projects.find(query)
        res.status(200).json(result)
    } catch (err) {
        console.error('Error!! Transaction failed:', err);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
}

// delete projects
exports.deleteProject=async(req,res)=>{
    const {_id}=req.body
    try{
        const result=await projects.findByIdAndDelete({_id})
        res.status(200).json(result)
    }catch (err) {
        console.error('Error!! Transaction failed:', err);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
}
