import mongoose from "mongoose";

const PlaceholderSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    category: {
        type: String,
        required: [true, "Category is required"],
    },
    type: {
        type: String,
        required: [true, "Type is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    shortDescription: {
        type: String,
        required: [true, "Short description is required"],
    },
    previewLink: {
        type: String,
        required: [true, "Preview link is required"],
    },
    outputImgLink: {
        type: String,
        required: [true, "Output image link is required"],
    },
    imgLink: {
        type: String,
        required: [true, "Image link is required"],
    },
    downloadLink: {
        type: String,
        required: [true, "Download link is required"],
    }
}, { timestamps: true })

const PlaceholderModal = mongoose.model('Placeholder', PlaceholderSchema);
export default PlaceholderModal;