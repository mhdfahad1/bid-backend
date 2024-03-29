const categories = require('../Model/catogorySchema');

// get all categories
exports.getCategories = async (req, res) => {
    const searchKey = req.query.search || ''; 
    const query = {
        name: { $regex: String(searchKey), $options: 'i' }
    };

    try {
        const result = await categories.find(query);
        res.status(200).json(result);
    } catch (err) {
        console.error('Error!! Transaction failed:', err);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
};
