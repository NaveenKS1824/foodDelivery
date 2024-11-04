import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './cartItem.css'
function Cart(props) {
    const cartItem = useSelector((state)=>state.cartItem.cart);
    console.log(cartItem);
    const [total,setTotal]= useState(0);
    const print = Math.ceil(total);
    const [deliveryCharge,setDeliveryCharge] = useState(0); 
    useEffect(
        ()=>{
            let sum =0;
            cartItem.forEach((item)=>{
                sum+=(item.price*item.quantity);
            });
            setTotal(sum);
            if(sum == 0){
                setDeliveryCharge(0);
            }
            else{
            setDeliveryCharge(50);}
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
                    <div className="BillTitle">
                        <div className="billingDetails">
                            BillingDetails
                        </div>
                        <div className="">
                            <div className="ItemTotal">
                                ItemTotal
                            </div>
                            <div className="DeliveryCharge">
                                DeliveryCharge
                            </div>
                            <div className="ToPay">
                                To Pay
                            </div>
                        </div>
                        
                    </div>
                    <div className="BillAmount">
                        <div className="">
                        :${print}
                        </div>
                        <div className="">
                            :${deliveryCharge}
                        </div>
                        <div className="">
                            :${print+deliveryCharge}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;