import React from "react";
import { useState,useEffect } from "react";

function BusCollection(){
  const [buses,setBuses]=useState([]);
   const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/buses")
      .then((response) => response.json())
      .then((data) => {
        setBuses(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);
  if (error) {
    return <p>{error.sorry}</p>;
  } else if (isLoading) {
    return <p>{isLoading}</p>;
  }

  const handleEnlist = (bot) => {
    setFavourites([...favourites, bot]);
  };

  
  
    return(        
  <div>
  <div>
    <input placeholder="input route code" ></input>
  </div>
  <div className="bus-card-container">
    <div className="ui four column grid">
      {"YOUR BUSES."}
    
     
  
    
      <div className="row">
        <h1>Bus collection</h1>
        {buses.map((bus) => (
          <div className="buses" key={bus.id}>
            <img src={bus.bus_url} alt={bus.name} />
            <h2>Name:{bus.name}</h2>
            <p>slogan:{bus.slogan}</p>
            <h1>fleet:{bus.fleet}</h1>
            <h1>rating:{bus.rating}</h1>
            <button onClick={() => handleEnlist(bus)}>
              Add to your favourites
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
    )
  }
export default BusCollection;