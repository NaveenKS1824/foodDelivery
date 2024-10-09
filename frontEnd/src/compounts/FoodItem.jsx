import React from 'react';
import { foodItems } from '../data';
import './foodItem.css'
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem, incrementItems } from '../redux/cartSlice';
import img1 from '../assets/shop1.jpeg'
import img2 from '../assets/shop2.jpeg'
import Footer from './Footer';
function FoodItem({onAddToCart}) {
    const cartItem = useSelector((state)=>state.cartItem.cart);
    const dispatch = useDispatch()
    const handleAddCart = (item) => {
        const search = cartItem.find((a) => (item.id === a.id));
        if (search) {
          dispatch(incrementItems(item));
        } else {
          dispatch(addCartItem(item));
        }
        onAddToCart(); 
      };
    return (
        <>
        <div className="Main">
            <div className="heroContent">
                <div className="sideContent">
                    <h1>Cravings To your Door</h1>
                    <h2>Explore a world of flavors with just a tap. Your favorite meals, delivered hot and fresh, right when you want them</h2>
                    <p>From local favorites to international cuisines, we've got something for every craving.</p>
                    <p>No more waiting enjoy quick, reliable delivery straight to your door.</p>
                    <p>Download our app and enjoy exclusive deals and offers on every order
                    </p>
                </div>
            </div>
            <div className="">
                <div className="someContent">
                    <h1>Feast Without the Fuss.</h1>
                    <h2>Your go-to app for quick, reliable food delivery. Enjoy top-rated dishes from your favorite spots</h2>
                    <p>Good food, great vibes, delivered with care.</p>
                    <p>From breakfast to midnight snacks, we’ve got you covered</p>
                    <p>Join millions of satisfied customers enjoying fast, fresh, and reliable delivery</p>
                </div>
            </div>
            <div className="mainBranch">
                <div className="branch1">
                    <div className="branchimg">
                        <img src={img1} alt="" />
                    </div>
                    <div className="bottombroder">
                    <h3>Downtown Miami Branch:</h3>
                    <p>Located in the heart of the city, our Downtown Miami branch of IsbelEats is your go-to destination for fast, fresh, and flavorful meals. Whether you're working late or enjoying a day in the bustling urban landscape, our wide range of gourmet options and local favorites are just a tap away. With quick delivery times and a commitment to quality, IsbelEats is here to satisfy your cravings anytime, anywhere in the city.</p>
                    </div>
                </div>
                <div className="branch1">
                    <div className="branchimg">
                        <img src={img2} alt="" />
                    </div>
                    <div className="bottombroder">
                    <h3>Coral Gables Branch:</h3>
                    <p>Nestled in the charming streets of Coral Gables, IsbelEats offers a curated menu that perfectly complements the neighborhood's relaxed and family-friendly vibe. From healthy choices to indulgent treats, we've got something for everyone. Enjoy the convenience of having your favorite meals delivered right to your doorstep, making every night a delicious experience in the comfort of your home.</p>
                    </div>
                </div>
            </div>
            <div className="mainContainer">
                {foodItems.map((item)=>(
                    <div className="subContainer">
                        <div className="imgContainer">
                            <img src={item.image[0]} alt="" />
                        </div>
                        <div className="descContainer">
                            <h3>{item.title}</h3>
                            <h5>{item.description}</h5>
                            <h2>${item.price}</h2>
                        </div>
                        <button onClick={()=>handleAddCart(item)}>Add To Cart</button>
                        <button>Buy Now</button>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
        </>
    );
}

export default FoodItem;