import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './cartItem.css'
function Cart(props) {
    const cartItem = useSelector((state)=>state.cartItem.cart);
    console.log(cartItem);
    const [total,setTotal]= useState(0);
    const print = Math.ceil(total);
    useEffect(
        ()=>{
            let sum =0;
            cartItem.forEach((item)=>{
                sum+=(item.price*item.quantity);
            });
            setTotal(sum);
        }
    ,[cartItem])
    return (
        <>
            <div className="mainCart">
                <div className="wishList">
                    {cartItem.map((item)=>{
                        return(<CartItem item={item}/>)
                    })}
                </div>
                <div className="BillingContainer">
                    <div className="billingDetails">
                        BillingDetails:
                    </div>
                    <div className="ItemTotal">
                        ItemTotal: ${print}
                    </div>
                    <div className="DeliveryCharge">
                        DeliveryCharge: $10
                    </div>
                    <div className="ToPay">
                        To Pay: ${print+10}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;