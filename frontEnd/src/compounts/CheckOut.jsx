import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./checkout.css";

function Checkout() {
  const cartItem = useSelector((state) => state.cartItem.cart);
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const total = cartItem.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryCharge = total > 0 ? 10 : 0;
  const finalTotal = total + deliveryCharge;

  const handleOrder = () => {
    if (!address) {
      alert("Please enter your delivery address.");
      return;
    }
    setOrderPlaced(true);
  };

  return (
    <div className="checkout-container">
      <div className="checkout-card">
        {orderPlaced ? (
          <div className="order-confirmation">
            <h3>Thank you for your order!</h3>
            <p>Your delicious meal is on the way! 🚀</p>
            <Link to="/">🏡 Return to Home</Link>
            <button onClick={() => navigate("/live-tracking")} className="track-order-btn">
              🚚 Track Order
            </button>
          </div>
        ) : (
          <>
            <h2>🛒 Checkout</h2>
            <div className="billing-summary">
              <h3>Billing Summary</h3>
              <p>Items Cost: <strong>${total.toFixed(2)}</strong></p>
              <p>Delivery Charge: <strong>${deliveryCharge}</strong></p>
              <p>Total: <strong>${finalTotal.toFixed(2)}</strong></p>
            </div>
            
            <div className="delivery-info">
              <h3>Delivery Address</h3>
              <input
                type="text"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="payment-method">
              <h3>Payment Method</h3>
              <label>
                <input
                  type="radio"
                  value="creditCard"
                  checked={paymentMethod === "creditCard"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Credit Card
              </label>
              <label>
                <input
                  type="radio"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                PayPal
              </label>
              <label>
                <input
                  type="radio"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Cash on Delivery
              </label>
            </div>

            <button className="confirm-order-btn" onClick={handleOrder}>
              Place Order
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Checkout;
