import React from 'react';
import Navbar from "./layout/Navbar";
import BeerList from "./layout/BeerList";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from "./layout/Homepage";
import Header from "./layout/Header";
import {BeerProvider} from "./components/BeerContext";
import BeerOfTheDay from "./components/BeerOfTheDay";
import SearchedBeer from "./layout/SearchedBeer";
import BeerCategories from "./layout/BeerCategories";
import Glass from "./layout/Glass";
import Breweries from "./layout/Breweries";
import BeersByBrewery from "./layout/BeersByBrewery";

function App() {
  return (
      <>
              <BeerProvider>
                  <Router>
                      <Navbar/>
                      <Header/>
                      <Route exact path={"/"} component={Homepage}/>
                      <Route path={"/beers"} component={BeerList}/>
                      <Route path={"/beerOfTheDay"} component={BeerOfTheDay}/>
                      <Route path="/result/:beer" component={SearchedBeer}/>
                      <Route path="/categories" component={BeerCategories}/>
                      <Route path="/glasses" component={Glass}/>
                      <Route path="/breweries" component={Breweries}/>
                      <Route path="/brewery/:breweryId/beers" component={BeersByBrewery}/>
                  </Router>
              </BeerProvider>



      </>
  );
}

export default App;
