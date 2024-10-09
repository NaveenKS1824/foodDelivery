import React, { useEffect, useState } from 'react';
import './header.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import logo from "../assets/logo.png";

function Header(props) {
    const count = useSelector((state)=>state.cartItem.cart);
    const [total,setTotal]=useState(0);
    useEffect(
        ()=>{
            let sum =0;
            count.forEach((item)=>{
                sum+=(1*item.quantity);
            });
            setTotal(sum);
        }
    ,[count]) 
    return (
        <>
        <div className="mainHeader">
            <div className="logoContainer">
                <Link to={'/landing'}><img src={logo} alt="" style={{width:'130px'}}/></Link>
            </div>
            <div className="pageContainer">
                <Link to={'/'}><h4>MainMenu</h4></Link>
                <Link to={'/cart'}><h4>Cart: {total}</h4></Link>  
                <h4>Help</h4>
                <Link to={'/search'}><h4 style={{fontSize:"28px"}}><IoIosSearch/></h4></Link>
            </div>
        </div>
        </>
    );
}

export default Header;