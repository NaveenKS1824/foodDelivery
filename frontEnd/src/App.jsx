import { useState,useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FoodItem from "./compounts/FoodItem";
import Header from "./compounts/Header";
import Cart from "./compounts/Cart";
import SearchBar from "./compounts/SearchBar";
import Landing from "./compounts/Landing";
import Sucess from "./compounts/Sucess";
import Error from "./compounts/Error";
import Checkout from "./compounts/CheckOut";
import LiveTracking from "./compounts/LiveTracking"; // ✅ Import LiveTracking Component
import Login from "./compounts/Login";
import Signup from "./compounts/SingUp";

function App() {
  const [successVisible, setSuccessVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const showSuccess = (msg) => {
    setSuccessVisible(true);
    setSuccessMessage(msg);
    setTimeout(() => {
      setSuccessVisible(false);
    }, 3000);
  };

  const showError = (msg) => {
    setErrorVisible(true);
    setErrorMessage(msg);
    setTimeout(() => {
      setErrorVisible(false);
      setErrorMessage("");
    }, 3000);
  };
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/landing" element={<FoodItem onAddToCart={showSuccess} onError={showError} />} />
          <Route path="/cart" element={<Cart onAddToCart={showSuccess} onError={showError} />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/search" element={<SearchBar />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/live-tracking" element={<LiveTracking orderId="67d91c67f86a7f5302802a45" />} /> {/* ✅ Add LiveTracking Route */}
        </Routes>
      </BrowserRouter>

      {successVisible && (
        <div className="success-notification">
          <Sucess msg={successMessage} />
        </div>
      )}

      {errorVisible && (
        <div className="success-notification">
          <Error msg={errorMessage} />
        </div>
      )}
    </>
  );
}

export default App;
