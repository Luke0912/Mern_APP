import mongoose from "mongoose";

const productSchema = new mongoose.Schema({  // Fixed the typo
    name: {
        type: String,
        required: true 
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// Prevent model re-registration in server restarts (Good Practice)
const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;