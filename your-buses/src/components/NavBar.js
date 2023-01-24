import React from "react";
import Logo from "./logo";
import Slider from 'react-slick';
import PopularDestinations from "./Assets/PopularDestinations";
import BusCollection from "./components/BusCollection";


function NavBar() {

    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
         <Slider {...settings}>
        <img src="./Assets/logo.png" alt="image1" className="image" />
        <img src="./image2.jpg" alt="image2" className="image" />
        <img src="./image3.jpg" alt="image3" className="image" />
      </Slider>
      <Logo />
      <h1 style={{fontStyle: "italic" ,textAlign: "center"}}>
        Let's help you make a decision on how to get there. BUSGANI for you!!
      </h1>
     <PopularDestinations/>
      <BusCollection/>
    </div>
  );
}
export default NavBar;
