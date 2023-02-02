import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div  className="footer-container" style={{
        //     position: "fixed",
        //  bottom: 0,
        //  width: "100%",
            fontSize: "2em", 
            color: "darkblue", 
            padding: "6px", 
            borderRadius: "30%", 
            transition: "all 0.3s", 
            display: "flex",
            justifyContent: "right", 
            alignItems: "center",
            textAlign:"center",
    
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

           <div style={{textAlign:""}}>
            <a href="mailto:busganiea@gmail.com" className="email-link">
                busganiea@gmail.com
            </a>
          </div>
         </div>
    );
}




export default Footer;
