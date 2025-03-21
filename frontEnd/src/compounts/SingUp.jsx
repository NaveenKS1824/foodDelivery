import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./auth.css";
import { useNavigate } from "react-router-dom";
import axios  from "axios";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); 
  
    const handleSignup = async (e) => {
      e.preventDefault();
    
      try {
        const response = await axios.post("http://localhost:3005/api/user/signup", {
          name,
          email,
          password,
        });
    
        console.log("🔹 Response from Server:", response.data);
    
        alert("Signup successful! Redirecting to Login...");
          navigate("/login");
        // if (response.data.success) {
        //   alert("Signup successful! Redirecting to Login...");
        //   navigate("/login");
        // } else {
        //   setError(response.data.message);
        //   console.log(error);
        // }
      } catch (err) {
        console.error("Signup Error:", err.response?.data || err.message);
        setError(err.response?.data?.message || "Signup failed! Email may already exist.");
        alert("user already exist!")
      }
    };
    
  
  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
