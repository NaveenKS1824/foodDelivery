import React from 'react';
import './selectedItem.css';
function SelectedItem(props) {
    return (
        <div>
            <div className="mainWishList">
                <div className="imgSelected">
                    <img src={props.a.image[0]} alt="" />
                </div>
                <div className="name">
                    <h4>{props.a.title}</h4>
                </div>
                <div className="buttonPlace">
                    <button>Order Now</button>
                </div>
            </div>
        </div>
    );
}

export default SelectedItem;