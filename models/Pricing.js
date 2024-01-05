const mongoose = require("mongoose");

const pricingSchema = new mongoose.Schema({
  storeId: Number,
  SKU: String,
  productName: String,
  price: Number,
  date: Date,
});

module.exports = mongoose.model("Pricing", pricingSchema);
