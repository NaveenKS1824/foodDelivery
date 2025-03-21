import React from 'react';
import img from '../assets/pizzawall2.jpeg';
import './landing.css';
import { Link } from 'react-router-dom';
import connect from '../assets/connect.png'
import order from '../assets/order.png'
import add from '../assets/add.png'
import FoodItem from './FoodItem';
import vid1  from '../assets/videoplayback.webm';
import Footer from './Footer';
import LiveTracking from './LiveTracking';

function Landing(props) {
    return (
        <div className="landingContainer">
            <div className="imgContainer1"> 
                <video autoPlay loop muted className='backGroundVideo'>
                    <source src = {vid1}/>
                </video>
                <div className="words">
                        <h1>Order Your Special Meals Tonight and Enjoy</h1>
                        <h2>Meals delivered, happiness guaranteed</h2>
                        <h3>Order, eat, repeat, enjoy</h3>
                </div>     
                {/* <div className=""></div>   */}
            </div>
            <div className="mainMenuButton">
                <Link to={'/landing'}><button>Go to MainMenu</button></Link>
            </div>
            <div className="someContent">
                <h1>Food Ordering and Delivery Portal</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aperiam laboriosam quibusdam. Magni ex totam voluptates, officiis, debitis tempore qui culpa ea iste possimus vero sit nostrum aliquam porro deleniti.</p>
            </div>
            <div className="">
                <div className="Amain">
                    <h1 style={{color:'black'}}>
                    How ToYourDoor Works for customers
                    </h1>
                </div>
                <div className="mainCoa">
                    <div className="coa">
                        <img src={connect} alt="" />
                        <h3>Connect</h3>
                        <h4>We connect you with the business owners. You can Place an order, book a table or order a delivery directly.</h4>
                    </div>
                    <div className="coa">
                        <img src={order} alt="" />
                        <h3>Order</h3>
                        <h4>Order Online,Book A Table, Grab A Coupon or order a delivery if restaurant is offering.</h4>
                    </div>
                    <div className="coa">
                        <img src={add} alt="" />
                        <h3>Food</h3>
                        <h4>Grow Your Restaurant Business With Powerful Marketing and Ordering System by FoodChow.</h4>
                    </div>
                </div>
            </div>
            {/* <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
            <div style={{width:"70%",height:"50%", overflow:"hidden",display:"flex",justifyContent:"center",alignSelf:"center"}}>
                <LiveTracking orderId="67d91c67f86a7f5302802a45"/>
            </div>
            </div> */}
            <Footer/>
        </div>
    );
}

export default Landing;