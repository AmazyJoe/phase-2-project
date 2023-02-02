import "./App.css";
import NavBar from "./components/NavBar";
import PopularDestinations from "./components/PopularDestinations";
import BusCollection from "./components/BusCollection";
import Key from "./components/Key";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import { useEffect } from "react";


function App() {
  const text="BusGani-EA"
 useEffect(()=>{
  document.title = text
 },[text])
  return (
    <div>
<BrowserRouter>
  <NavBar />
    <Switch>
      <Route exact path="/" component={PopularDestinations} />
      <Route path="/buscollection" component={BusCollection} />
      <Route path="/key" component={Key} />
      <Route exact path="/footer" component={Footer}/>
    </Switch>
</BrowserRouter>

<Footer/>

    </div>
  );
}

export default App;
