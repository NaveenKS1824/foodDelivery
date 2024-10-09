import React from 'react';
import './cartItem.css';
import { useDispatch } from 'react-redux';
import { decrementItems, incrementItems, removeCartItem } from '../redux/cartSlice';
function CartItem(props) {
    const dispatch = useDispatch();
    const handleInc =(item)=>{
        dispatch(incrementItems(item));
    }
    const handleDec=(item)=>{
        dispatch(decrementItems(item));
    }
    return (
        <div>
            <div className="subCartContainer">
                    <div className="imgCartContainer">
                        <img src={props.item.image[0]} alt="" />
                    </div>
                    <div className="descCartContainer">
                        <h3>{props.item.title}</h3>
                        <h2>${props.item.price*props.item.quantity}</h2>
                    </div>
                    <div className="buttonContainer">
                        <button onClick={()=>handleInc(props.item)}>+</button>
                        <h4>{props.item.quantity}</h4>
                        <button onClick={()=>handleDec(props.item)}>-</button>
                    </div>
                    <div className="">
                        <button onClick={()=>(dispatch(removeCartItem(props.item)))}>remove</button>
                    </div>
                </div>  
        </div>
    );
}

export default CartItem;