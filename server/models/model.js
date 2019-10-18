const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const ProductSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please enter a name"],
        minlength: [3, "Min length is 3 chars long"],
    },
    qty : {
        type: Number,
        required: [true, "Please enter qty"],
        min: [0, 'Quantity should be greater or equals 0'],
        minlength: [1, "Min length is 1 chars long"],
    },
    price : {
        type: Number,
        required: [true, "Please enter price"],
        min: [0, 'Price should be greater or equals 0'],
        minlength: [1, "Min length is 1 chars long"],
    },
    productid : {
        type: Number,
        default: 0,
    },
}, {timestamp: true});

const Product = mongoose.model("Product", ProductSchema);

// ProductSchema.plugin(AutoIncrement, {inc_field: 'productid'});