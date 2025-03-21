import React, { useEffect, useState } from 'react';
import './header.css';
import { useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa"; 
import logo from "../assets/logo6.png";

function Header() {
  const count = useSelector((state) => state.cartItem.cart);
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let sum = 0;
    count.forEach((item) => {
      sum += item.quantity;
    });
    setTotal(sum);
  }, [count]);

 
  useEffect(() => {
    const checkUser = () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);
    };
    checkUser();

    
    window.addEventListener("storage", checkUser);
    return () => window.removeEventListener("storage", checkUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login"); 
  };

  return (
    <>
      <div className="mainHeader">
       
        <div className="logoContainer">
          <Link to={'/'}><img src={logo} alt="Logo" style={{ width: '75px' }} /></Link>
        </div>

        
        <div className="pageContainer">
          <NavLink to={'/landing'} className={({ isActive }) => (isActive ? "active-link" : "")} end>
            <h4>Main Menu</h4>
          </NavLink>
          <NavLink to={'/cart'} className={({ isActive }) => (isActive ? "active-link" : "")} end>
            <h4>
              <div className="cart">
                🛒<span className='cart-count'>{total}</span>
              </div>
            </h4>
          </NavLink>
          <NavLink to={'/search'} className={({ isActive }) => (isActive ? "active-link" : "")} end>
            <h4 style={{ fontSize: "28px" }}><IoIosSearch /></h4>
          </NavLink>
          {user ? (
            <div className="user-container">
              <FaUserCircle className="user-icon" />
              <span className="username">{user.name}</span>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <NavLink to={'/login'} className="auth-link">
              <h4>Login / Signup</h4>
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
