import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer-container" style={{
             fontSize: "3em", 
          color: "darkblue", 
           padding: "10px", 
            borderRadius: "50%", 
            transition: "all 0.3s", 
           display: "flex",
           justifyContent: "space-around", 
           alignItems: "center",
           background: "gray",
           textAlign:"center"
        }}>

            
            <a href="https://www.facebook.com/profile.php?id=100090052710427" className="footer-container">

            <FaFacebook/>
            
            </a>
            <a href="https://twitter.com/BusGaniEA" className="footer-container">
            
                <FaTwitter />
            </a>
            <a href="https://www.instagram.com/busganiea/" className="footer-container">
                <FaInstagram />
            </a>
            <a href="mailto:busganiea@gmail.com" className="email-link">busganiea@gmail.com</a>
        

        </div>
    );
}




export default Footer;
