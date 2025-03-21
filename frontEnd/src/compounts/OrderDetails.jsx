import React from "react";
import LiveTracking from "./LiveTracking"; 

const OrderDetails = () => {
  const orderId = "67d91c67f86a7f5302802a45";

  return (
    <div>
      <h2>Order Details</h2>
      <h3>Live Order Tracking</h3>
      <LiveTracking orderId={orderId} />
    </div>
  );
};

export default OrderDetails;
