import "./App.css";
import NavBar from "./components/NavBar";
import PopularDestinations from "./components/PopularDestinations";
import BusCollection from "./components/BusCollection";
import Key from "./components/Key";
import {Route,Switch} from "react-router-dom";


function App() {
  return (
    <div>
    <Switch>
      <NavBar />
      <Route exact path="/">
       <PopularDestinations/>
      </Route>
      <Route path="/buscollection">
       <BusCollection/>
      </Route>
      <Route path="/key">
       <Key/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
