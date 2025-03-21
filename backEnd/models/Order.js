const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [{ foodId: { type: mongoose.Schema.Types.ObjectId, ref: "FoodItem" }, quantity: Number }],
  totalAmount: { type: Number, required: true },
  status: { type: String, enum: ["Preparing", "Out for Delivery", "Delivered"], default: "Preparing" },
  deliveryLocation: { lat: Number, lng: Number }, // Store driver's live location
});

module.exports = mongoose.model("Order", OrderSchema);
