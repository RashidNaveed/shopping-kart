const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  size: [{ type: String }],
  price: {
    type: Number,
    required: true
  },
  images: [{ type: String }],
  rating: {
    type: Number,
    min: 0,
    max: 5
  },
  tags: [{ type: String }],
  color: [{ type: String }],
  description: String
});

module.exports = mongoose.model("products", productSchema);
//nothing
