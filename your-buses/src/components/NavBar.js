import React from "react";
import Logo from "./Logo";
import {NavLink} from "react-router-dom";


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
    <div style={{backgroundColor: "grey"}}>
    <Logo />
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
