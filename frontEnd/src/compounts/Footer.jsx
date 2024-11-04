import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
function Footer(props) {
    return (
        <div className="footer">
                <p>&copy; 2024 Food Ordering and Delivery Portal</p>
                <div className="bottom1">
                    <div className="context">
                        <Link to={'/landing'}><p>Home</p></Link>
                        <Link to={'/'}><p>MainMenu</p></Link>
                        <p>Cart</p>
                        <Link to={'/'}><p>About Us</p></Link>
                    </div>
                </div>
            </div>
    );
}

export default Footer;