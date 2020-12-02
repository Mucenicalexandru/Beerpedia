import React from 'react';
import Navbar from "./layout/Navbar";
import BeerList from "./layout/BeerList";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from "./layout/Homepage";
import Header from "./layout/Header";
import {BeerProvider} from "./components/BeerContext";

function App() {
  return (
      <>
      <BeerProvider>
          <Router>
              <Navbar/>
              <Header/>
              <Route exact path={"/"} component={Homepage}/>
              <Route path={"/beers"} component={BeerList}/>
          </Router>
      </BeerProvider>



      </>
  );
}

export default App;
