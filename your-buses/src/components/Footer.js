import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer-container">
            <a href="https://www.facebook.com" className="social-link">
                <FaFacebook />
            </a>
            <a href="https://www.twitter.com" className="social-link">
                <FaTwitter />
            </a>
            <a href="https://www.instagram.com" className="social-link">
                <FaInstagram />
            </a>
        </div>
    );
}




export default Footer;