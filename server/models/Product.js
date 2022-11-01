const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    ram: {
        type: String,
        required: true,
    },
    rom: {
        type: String,
        required: true,
    },
    tinyDes: {
        type: String,
    },
    fullDes: {
        type: String,
    },
    id_category: {
        type: ObjectId,
        ref: "categories",
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("products", ProductSchema);
