import React from "react";
import Logo from "./Logo";
import {NavLink} from "react-router-dom";
//import buscar from '../assets/buscar.png';
//import mash from '../assets/mash.png';
//import EnaCoach from '../assets/EnaCoach.jpg'
//import CoastBus from '../assets/CoastBus.jpg';
//import Hodan from '../assets/Hodan.jpg';
//import Tahmeed from '../assets/Tahmeed.jpg';
//import Dreamline from '../assets/Dreamline.jpg';
//import coastair from '../assets/coast air.jpg'


const linkStyles = {
  display: "inline-block",
  width: "162px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "darkblue",
  textDecoration: "none",
  color: "white",
};




function NavBar() {
  return (
    <div>
    
    
      
  
    <Logo /><h5>BusGaniEA</h5>

    
    
  
      <>
      </>
    <NavLink
    to="/"
    exact
    style={linkStyles}  
      activeStyle={{
        background: "darkblue",
      }}
     >
     PopularDestinations 
     </NavLink>
     <NavLink
     to="/buscollection"
     exact
     style={linkStyles}
     activeStyle={{
      background:"darkblue",
     }}
    >
      BusCollection
    </NavLink>
    <NavLink
    to="/key"
    exact
    style={linkStyles}
    activeStyle={{
      background:"darkblue",
      
    }}
    >
      key
    </NavLink>
    
    

    </div>
  );
}
export default NavBar;
