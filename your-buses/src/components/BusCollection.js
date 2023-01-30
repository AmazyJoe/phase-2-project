import React from "react";
import { useState,useEffect } from "react";


function BusCollection(){
  const [buses,setBuses]=useState([]);
   const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [favourites, setFavourites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


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
    return <p>Loading...</p>;
  }

  const handleEnlist = (bot) => {
    setFavourites([...favourites, bot]);
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredBuses = buses.filter((bus) =>
    bus.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return(        
  <div>
  <div>
    
  </div>
  <div className="bus-card-container">
    <div className="ui four column grid">
      <form>
        <input type="text" placeholder="Search bus name" onChange={handleSearch} value={searchTerm} />
      </form>
      <div className="row">
        <h1>Bus collection</h1>
        {filteredBuses.map((bus) => (
   <div className="buses" key={bus.id} style={{display: 'inline-block', width: '30%'}}>
    <img src={bus.bus_url} alt={bus.name} style={{width: '100%', height: 'auto'}} />
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