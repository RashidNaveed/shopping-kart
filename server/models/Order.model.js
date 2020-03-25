const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    referenceId: String,
    customerInfo: {
      email: String,
      firstName: String,
      lastName: String,
      country: String,
      city: String,
      province: String,
      postalCode: Number,
      phoneNumber: Number,
      address1: String,
      address2: String
    },
    customerOrder: {
      itemId: String,
      itemTitle: String,
      selectedSize: String,
      selectedColor: String,
      price: Number,
      quantity: Number
    },
    totalDelivery: Number,
    totalAmount: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("orders", orderSchema);
