const express = require("express");
const router = express.Router();
const { createOrder, updateOrderLocation, getOrderTracking } = require('../controller/orderController');

router.post("/create", createOrder);

router.put("/update-location/:orderId", updateOrderLocation);

router.get("/track/:orderId", getOrderTracking);

module.exports = router;
