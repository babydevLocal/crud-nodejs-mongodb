const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    detail: {
      type: String,
    },
    price: {
      type: Number,
    },
    amount: {
      type: Number,
    },
    file: {
      type: String,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("products", productSchema);

module.exports = Product;
