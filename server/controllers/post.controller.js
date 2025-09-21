// Search placeholders/templates by query
const searchPlaceholders = async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) {
            return res.status(400).json({ success: false, message: "No search query provided." });
        }
        // Search by name, description, or category
        const results = await PlaceholderModal.find({
            $or: [
                { name: { $regex: query, $options: "i" } },
                { description: { $regex: query, $options: "i" } },
                { category: { $regex: query, $options: "i" } }
            ]
        }).select("name category type description shortDescription previewLink outputImgLink imgLink downloadLink");

        res.status(200).json({ success: true, data: results });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching search results", error: error.message });
    }
};

// Add searchPlaceholders to module.exports
module.exports = {
    ...module.exports,
    searchPlaceholders
};