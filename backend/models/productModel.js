const mongoose = require("mongoose")

const Schema = mongoose.Schema

const productSchema = new Schema ({
    title : { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    salePrice: { type: Number, required: true },
    isNewProduct: { type: Boolean, required: true, default: false },
    onSale: { type: Boolean, required: true, default: false },
    isFeatured: { type: Boolean, required: true, default: false },
    isTrending: { type: Boolean, required: true, default: false },
    colors: [ String ],
    src1: { type: String, required: true },
    src2: { type: String, required: true },
}, {timestamps: true})

module.exports = mongoose.model("Product", productSchema)