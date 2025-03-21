import React, { useState } from 'react';
import './selectedItem.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem, incrementItems } from '../redux/cartSlice';
import Error from './Error';
function SelectedItem(props) {
    const cartItem = useSelector((state)=>state.cartItem.cart);
    const dispatch = useDispatch();
    const [errormsg,setErrorMsg]=useState("");
    const history = useNavigate();
    const handleitem = (item) =>{
        if(item.avail !== "yes"){
            setErrorMsg("Items is Not Available");
            setTimeout(()=>{
                setErrorMsg("");
            },2000);
            return;
        }
        const search = cartItem.find((a)=>(item.id == a.id));
        if(search){
            dispatch(incrementItems(item));
        }
        else{
            dispatch(addCartItem(item));
        }
        history("/cart");

    }
    return (
        <div>
            <div className="mainWishList">
                <div className="imgSelected">
                    <img src={props.a.image[0]} alt="" />
                </div>
                <div className="name">
                    <h4>{props.a.title}</h4>
                    <h5><div className={props.a.avail}>Avaialbe : {props.a.avail}</div></h5>
                </div>
                <div className="buttonPlace">
                    <button onClick={() => handleitem(props.a)}>Order Now</button>
                    {errormsg && <Error msg={errormsg}></Error>}
                </div>
            </div>
        </div>
    );
}

export default SelectedItem;