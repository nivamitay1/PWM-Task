const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  img: {
    type: String,
    required: [true, "A product must have a main image"],
  },
  name: {
    type: String,
    required: [true, "A product must have a name."],
    trim: true,
    minlength: [2, "A product name must have more or equal then 2 characters."],
  },
  rate: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, "A product must have a price"],
  },
  description: {
    type: String,
    required: [true, "A product must have a description"],
    trim: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

// img, name, rate/review, price, description.
