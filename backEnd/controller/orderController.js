const Order = require("../models/Order");
const mongoose = require("mongoose");

// 📌 1️⃣ Create a New Order
exports.createOrder = async (req, res) => {
    try {
      const { userId, items, totalAmount } = req.body;
  
      // Convert userId to ObjectId
      const userObjectId = new mongoose.Types.ObjectId(userId);
  
      // Convert foodId in each item to ObjectId
      const formattedItems = items.map((item) => ({
        foodId: new mongoose.Types.ObjectId(item.foodId),
        quantity: item.quantity,
      }));
  
      const newOrder = new Order({
        userId: userObjectId,
        items: formattedItems,
        totalAmount,
        status: "Preparing",
        deliveryLocation: { lat: 0, lng: 0 }, // Default location
      });
  
      await newOrder.save();
      res.status(201).json({ message: "Order created successfully", order: newOrder });
    } catch (error) {
      console.error("Error creating order:", error); // Log error to console
      res.status(500).json({ message: "Error creating order", error: error.message });
    }
  };

// 📌 2️⃣ Update Driver's Location (Real-Time Tracking)
exports.updateOrderLocation = async (req, res) => {
  try {
    const { lat, lng } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.orderId,
      { deliveryLocation: { lat, lng } },
      { new: true }
    );

    if (!order) return res.status(404).json({ message: "Order not found" });

    res.json({ message: "Location updated", order });
  } catch (error) {
    res.status(500).json({ message: "Error updating location", error });
  }
};

// 📌 3️⃣ Get Tracking Details
exports.getOrderTracking = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order) return res.status(404).json({ message: "Order not found" });

    res.json({ location: order.deliveryLocation, status: order.status });
  } catch (error) {
    res.status(500).json({ message: "Error fetching tracking data", error });
  }
};
