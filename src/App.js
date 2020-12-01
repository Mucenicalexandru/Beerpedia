import React from 'react';
import Navbar from "./layout/Navbar";
import BeerList from "./layout/BeerList";
import Pagination from "./components/Pagination";
import {BeerProvider} from "./components/BeerContext";

function App() {
  return (
      <>
          <BeerProvider>
            <Navbar/>
            <Pagination/>
            <BeerList/>
          </BeerProvider>
      </>
  );
}

export default App;
