import React from "react";
import Logo from "./Logo";
import {NavLink} from "react-router-dom";
import buscar from '../assets/buscar.png';
import mash from '../assets/mash.png';
import EnaCoach from '../assets/EnaCoach.jpg'
import CoastBus from '../assets/CoastBus.jpg';
import Hodan from '../assets/Hodan.jpg';
import Tahmeed from '../assets/Tahmeed.jpg';
import Dreamline from '../assets/Dreamline.jpg';
import coastair from '../assets/coast air.jpg'


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
    
      
  <div data-interval="50" id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <Logo />
<h1 style={{fontStyle: "italic" ,textAlign: "center"}}>
        Let's help you make a decision on how to get there. BUSGANI for you!!
      </h1>
    <div className="carousel-item active">
      <img src={buscar} width="100" height="25"className="d-block w-50" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={mash} class="d-block w-50" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={EnaCoach} className="d-block w-50" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Hodan} className="d-block w-50" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Dreamline} className="d-block w-50" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={coastair} className="d-block w-50" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Tahmeed}  className="d-block w-50" alt="..."/>
    
    </div>
    <div className="carousel-item">
      <img src={CoastBus} className="d-block w-50" alt="..."/>
    </div>
  </div>
</div>
      
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
