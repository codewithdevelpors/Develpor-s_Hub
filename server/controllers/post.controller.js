import PlaceholderModal from '../models/post.model.js'

// Get all placeholders with pagination
const getAllPlaceholders = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const placeholders = await PlaceholderModal.find()
            .select('name category type description shortDescription previewLink outputImgLink imgLink downloadLink')
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 });

        const total = await PlaceholderModal.countDocuments();

        res.status(200).json({
            success: true,
            message: 'Placeholders retrieved successfully',
            data: placeholders,
            pagination: {
                currentPage: page,
                totalPages: Math.ceil(total / limit),
                totalItems: total,
                itemsPerPage: limit
            }
        });
    } catch (error) {
        console.error("Error retrieving placeholders:", error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

// Get placeholder by ID
const getPlaceholderById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'ID is required'
            });
        }

        const placeholder = await PlaceholderModal.findById(id)
            .select('name category type description shortDescription previewLink outputImgLink imgLink downloadLink');

        if (!placeholder) {
            return res.status(404).json({
                success: false,
                message: 'Placeholder not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Placeholder retrieved successfully',
            data: placeholder,
        });
    } catch (error) {
        console.error("Error retrieving placeholder:", error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

// Get placeholders by category
const getPlaceholdersByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        if (!category) {
            return res.status(400).json({
                success: false,
                message: 'Category is required'
            });
        }

        const placeholders = await PlaceholderModal.find({ category })
            .select('name category type description shortDescription previewLink outputImgLink imgLink downloadLink')
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 });

        const total = await PlaceholderModal.countDocuments({ category });

        res.status(200).json({
            success: true,
            message: 'Placeholders retrieved successfully',
            data: placeholders,
            pagination: {
                currentPage: page,
                totalPages: Math.ceil(total / limit),
                totalItems: total,
                itemsPerPage: limit
            }
        });
    } catch (error) {
        console.error("Error retrieving placeholders by category:", error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

// Get placeholders by file type
const getPlaceholdersByFileType = async (req, res) => {
    try {
        const { filetype } = req.params;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        if (!filetype) {
            return res.status(400).json({
                success: false,
                message: 'File type is required'
            });
        }

        const placeholders = await PlaceholderModal.find({ type: filetype })
            .select('name category type description shortDescription previewLink outputImgLink imgLink downloadLink')
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 });

        const total = await PlaceholderModal.countDocuments({ type: filetype });

        res.status(200).json({
            success: true,
            message: 'Placeholders retrieved successfully',
            data: placeholders,
            pagination: {
                currentPage: page,
                totalPages: Math.ceil(total / limit),
                totalItems: total,
                itemsPerPage: limit
            }
        });
    } catch (error) {
        console.error("Error retrieving placeholders by file type:", error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

// Home Page API - Get featured/recent placeholders
const getHomePageData = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 12;

        const placeholders = await PlaceholderModal.find()
            .select('name category type shortDescription previewLink imgLink')
            .sort({ createdAt: -1 })
            .limit(limit);

        res.status(200).json({
            success: true,
            message: 'Home page data retrieved successfully',
            data: placeholders
        });
    } catch (error) {
        console.error("Error retrieving home page data:", error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

// Detail Page API - Get detailed placeholder info
const getDetailPageData = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'ID is required'
            });
        }

        const placeholder = await PlaceholderModal.findById(id)
            .select('name category type description shortDescription previewLink outputImgLink imgLink downloadLink createdAt');

        if (!placeholder) {
            return res.status(404).json({
                success: false,
                message: 'Placeholder not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Detail page data retrieved successfully',
            data: placeholder
        });
    } catch (error) {
        console.error("Error retrieving detail page data:", error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

// Preview Page API - Get preview-specific data
const getPreviewPageData = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'ID is required'
            });
        }

        const placeholder = await PlaceholderModal.findById(id)
            .select('name category type shortDescription previewLink outputImgLink imgLink');

        if (!placeholder) {
            return res.status(404).json({
                success: false,
                message: 'Placeholder not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Preview page data retrieved successfully',
            data: placeholder
        });
    } catch (error) {
        console.error("Error retrieving preview page data:", error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

// Download Page API - Get download-specific data
const getDownloadPageData = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'ID is required'
            });
        }

        const placeholder = await PlaceholderModal.findById(id)
            .select('name category type description downloadLink outputImgLink imgLink');

        if (!placeholder) {
            return res.status(404).json({
                success: false,
                message: 'Placeholder not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Download page data retrieved successfully',
            data: placeholder
        });
    } catch (error) {
        console.error("Error retrieving download page data:", error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

export {
    getAllPlaceholders,
    getPlaceholderById,
    getPlaceholdersByCategory,
    getPlaceholdersByFileType,
    getHomePageData,
    getDetailPageData,
    getPreviewPageData,
    getDownloadPageData
}