import PostModal from '../models/post.model.js'

const fetchData = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'ID is required'
            });
        }

        const responseData = await PostModal.findById(id, 'id name type description shortDescription previewLink outputImgLink imgLink downloadLink');

        if (!responseData) {
            return res.status(404).json({
                success: false,
                message: 'Data not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Data retrieved successfully',
            data: responseData,
        });
    } catch (error) {
        console.error("Error retrieving data:", error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

export {
    fetchData,
}