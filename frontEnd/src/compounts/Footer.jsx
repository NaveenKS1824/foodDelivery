import React from 'react';
import './footer.css';
function Footer(props) {
    return (
        <div className="footer">
                <p>&copy; 2024 Food Ordering and Delivery Portal</p>
                <div className="bottom1">
                    <div className="context">
                        <p>Home</p>
                        <p>MainMenu</p>
                        <p>contact us</p>
                        <p>about us</p>
                    </div>
                </div>
            </div>
    );
}

export default Footer;