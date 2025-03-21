import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './cartItem.css';
import { Link, useNavigate } from 'react-router-dom';
import Checkout from './CheckOut';

function Cart({ onAddToCart, onError }) {
    const cartItem = useSelector((state) => state.cartItem.cart);
    console.log(cartItem);
    const [total, setTotal] = useState(0);
    const print = Math.ceil(total);
    const [deliveryCharge, setDeliveryCharge] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        let sum = 0;
        cartItem.forEach((item) => {
            sum += item.price * item.quantity;
        });
        setTotal(sum);
        setDeliveryCharge(sum === 0 ? 0 : 10);
    }, [cartItem]);
    const handleCheckout = () => {
        if (cartItem.length > 0) {
            navigate('/checkout');
        } else {
            onError("Cart is Empty");
        }
    };
    return (
    <>
    <div className="mainCart">
        <div className="wishList">
            {cartItem.map((item) => (
                <CartItem key={item.id} item={item} />
                ))}
                </div>
                <div className="BillingContainer">
                    <div className='billingDetails'><p>Billing Details</p>
                </div>
                <div className="Bcontent"><div className="BillContent">
                    <p>Items Cost</p><p>Delivery Cost</p>
                    <div className="topay">
                        <p>To Pay</p></div></div>
                    <div><p>: ${print}</p><p>: ${deliveryCharge}</p><div className="topay">
                        <p>: ${print + deliveryCharge}</p></div></div>
                        </div>
                        <div className='shopNowButton'><button onClick={handleCheckout}>Proceed to Checkout</button>
                        </div>
                        <div className='shopNowButton'><Link to={'/landing'}><button>Shop More</button></Link>
                        </div>
                        </div>
    </div>
    </>
    );
}

export default Cart;
